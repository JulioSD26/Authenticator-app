import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Sesión cerrada");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
      Cerrar sesión
    </button>
  );
};

export default Logout;
