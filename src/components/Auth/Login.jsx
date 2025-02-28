import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      navigate("/home", { state: { email } });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-sm w-full">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-blue-500 underline hover:text-blue-700 cursor-pointer"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
