import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAvcKbh1T361GmDsUA5paqxAMHkCqjNF90",
  authDomain: "login-a0e90.firebaseapp.com",
  projectId: "login-a0e90",
  storageBucket: "login-a0e90.firebasestorage.app",
  messagingSenderId: "258347315806",
  appId: "1:258347315806:web:1de6a8e737f0d37eacfacf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();