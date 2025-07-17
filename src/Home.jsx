import { auth } from "../src/config/firebase";
import { Fingerprint, Github } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-4 rounded-full shadow">
            <Fingerprint size={36} className="text-black" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome, {auth.currentUser?.email || "Guest"}!
        </h1>
        <p className="text-gray-600">
          You're now logged in to <span className="font-medium text-black">AuthHub</span>.
        </p>
      </div>
    </div>
  );
}

export default Home;
