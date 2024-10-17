// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth, db } from "./firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

// function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       const user = auth.currentUser;
//       console.log(user);
//       if (user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           email: user.email,
//           firstName: fname,
//           lastName: lname,
//           photo:""
//         });
//       }
//       console.log("User Registered Successfully!!");
//       toast.success("User Registered Successfully!!", {
//         position: "top-center",
//       });
//     } catch (error) {
//       console.log(error.message);
//       toast.error(error.message, {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <form className="p-6 bg-white shadow-md rounded-lg" onSubmit={handleRegister}>
//   <h3 className="text-2xl font-bold text-center mb-4">Sign Up</h3>

//   <div className="mb-4">
//     <label className="block text-sm font-medium text-gray-700">First name</label>
//     <input
//       type="text"
//       className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//       placeholder="First name"
//       onChange={(e) => setFname(e.target.value)}
//       required
//     />
//   </div>

//   <div className="mb-4">
//     <label className="block text-sm font-medium text-gray-700">Last name</label>
//     <input
//       type="text"
//       className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//       placeholder="Last name"
//       onChange={(e) => setLname(e.target.value)}
//     />
//   </div>

//   <div className="mb-4">
//     <label className="block text-sm font-medium text-gray-700">Email address</label>
//     <input
//       type="email"
//       className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//       placeholder="Enter email"
//       onChange={(e) => setEmail(e.target.value)}
//       required
//     />
//   </div>

//   <div className="mb-4">
//     <label className="block text-sm font-medium text-gray-700">Password</label>
//     <input
//       type="password"
//       className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//       placeholder="Enter password"
//       onChange={(e) => setPassword(e.target.value)}
//       required
//     />
//   </div>

//   <div className="mb-4">
//     <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">
//       Sign Up
//     </button>
//   </div>

//   <p className="text-center">
//     Already registered? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
//   </p>
// </form>

//   );
// }
// export default SignIn;

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from "../../config"; // Add your backend API base URL
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username: `${fname} ${lname}`, // Assuming your backend expects a username field
        }),
      });

      if (response.ok) {
        toast.success("User Registered Successfully!", {
          position: "top-center",
        });
        navigate("/login");
      } else {
        const error = await response.json();
        toast.error(error.message || "Registration failed", {
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.error(error.message);
      toast.error("An error occurred", {
        position: "bottom-center",
      });
    }
  };

  return (
    <form className="p-6 bg-white shadow-md rounded-lg" onSubmit={handleRegister}>
      <h3 className="text-2xl font-bold text-center mb-4">Sign Up</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">First name</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Last name</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email address</label>
        <input
          type="email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">
          Sign Up
        </button>
      </div>

      <p className="text-center">
        Already registered? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
      </p>
    </form>
  );
}

export default SignIn;
