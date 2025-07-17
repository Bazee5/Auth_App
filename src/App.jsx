import { Routes, Route } from "react-router-dom";
import Signup from "../src/SignUp";
import Login from "../src/Login";
import Home from "../src/Home";
import Navbar from "../src/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
