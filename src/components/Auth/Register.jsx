import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      alert(error.message);
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
    </div>
  );
};

export default Register;
