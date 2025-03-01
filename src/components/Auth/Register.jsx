import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Firebase
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Control de registro
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && !isRegistering) { // Solo redirige si no estamos en proceso de registro
        navigate("/home");
      }
    });

    return () => unsubscribe();
  }, [navigate, isRegistering]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsRegistering(true); // Iniciamos el proceso de registro
    const registerPromise = createUserWithEmailAndPassword(auth, email, password);

    toast.promise(registerPromise, {
      pending: 'Creating your account...',
      success: 'Registration successful! 🎉',
      error: {
        render({ data }) {
          const error = data.code;
          if (error === 'auth/invalid-email') return 'Invalid email address.';
          if (error === 'auth/weak-password') return 'Weak password. Must be at least 6 characters.';
          if (error === 'auth/email-already-in-use') return 'This email is already in use.';
          if (error === 'auth/missing-password') return 'Please enter a password.';
          if (error === 'auth/missing-email') return 'Please enter an email address.';
          return 'Something went wrong. Please try again.';
        }
      }
    });

    try {
      await registerPromise;
      setTimeout(() => {
        setIsRegistering(false); // Terminamos el proceso de registro
        navigate('/home');
      }, 2000); // Espera 1 segundo antes de redirigir para mostrar el mensaje de éxito
    } catch (error) {
      setIsRegistering(false); // Terminamos el proceso en caso de error
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-sm w-full">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            autoComplete="new-password"
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 cursor-pointer"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-blue-500 underline hover:text-blue-700 cursor-pointer"
          >
            Log in here
          </button>
        </p>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default Register;
