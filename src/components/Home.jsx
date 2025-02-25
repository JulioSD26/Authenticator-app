import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth} from "../firebaseConfig";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Welcome, {email}!</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Home;
