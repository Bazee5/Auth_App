import { Link, useNavigate } from "react-router-dom";
import { auth } from "../src/config/firebase";
import { useAuth } from "../src/AuthContext";
import { LogOut } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center shadow-sm">
      <Link to="/" className="text-xl font-bold text-gray-800 hover:text-black transition">
        AuthHub
      </Link>

      <div className="flex items-center gap-4">
        {!currentUser ? (
          <>
            <Link
              to="/login"
              className="text-sm text-gray-700 hover:text-black font-medium transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-sm text-gray-700 hover:text-black font-medium transition"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <span className="text-sm text-gray-600 font-medium">{currentUser.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded transition"
            >
              <LogOut size={16} /> Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
