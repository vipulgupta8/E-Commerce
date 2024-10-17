import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase"; // Your Firebase configuration
import { addUserData } from "../authSlice"; // Import the action to add user data
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Prepare user data to be dispatched
      const userData = {
        uid: user.uid,
        email: user.email,
        // Add any other properties you need
      };

      console.log("User Data to Dispatch:", userData); // Log the user data
      dispatch(addUserData(userData)); // Dispatch action with user data
      toast.success("Login successful!", { position: "top-center", autoClose: 2000 });
      navigate("/profile"); // Navigate to profile or any other page
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
      <ToastContainer /> {/* Add ToastContainer to show notifications */}
    </div>
  );
};

export default Login;
