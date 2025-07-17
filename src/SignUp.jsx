import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { Github, AlertCircle, Fingerprint } from "lucide-react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !password) return setErr("All fields are required.");
    if (password.length < 6) return setErr("Password must be at least 6 characters.");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      setErr("Signup failed. Try a different email.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-3 rounded-full">
            <Fingerprint size={32} className="text-black" />
          </div>
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-2">
          Create your account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Join <span className="font-medium text-black">AuthHub</span> today
        </p>

        {err && (
          <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            <AlertCircle size={18} /> {err}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-900 transition"
        >
          Sign Up
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to={"/login" } className="text-blue-600 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
