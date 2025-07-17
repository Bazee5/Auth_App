import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../src/config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { Github, AlertCircle, Fingerprint } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) return setErr("All fields are required.");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      setErr("Invalid credentials.");
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (e) {
      setErr("Google sign-in failed.");
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
          Sign in to your account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Welcome back to <span className="font-medium text-black">AuthHub</span>
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
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-900 transition"
        >
          Sign In
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>

        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-black py-2 rounded-md font-medium hover:bg-gray-100 transition"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link to={"/signup"} className="text-blue-600 hover:underline font-medium">
            Sign up
</Link>       
 </p>
      </div>
    </div>
  );
}

export default Login;
