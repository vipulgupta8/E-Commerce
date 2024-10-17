import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { removeUserData } from "../authSlice"; // Import removeUserData
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserDetails(userData);
    } else {
      navigate("/login"); // Redirect to login if no user data found
    }
  }, [navigate]);

  async function handleLogout() {
    try {
      // Clear local storage and Redux state
      localStorage.removeItem("userData");
      dispatch(removeUserData());
      toast.success("User logged out successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
      navigate("/login"); // Navigate to login page
    } catch (error) {
      console.error("Error logging out:", error.message);
      toast.error("Error logging out", {
        position: "top-center",
      });
    }
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      {userDetails ? (
        <>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Welcome {userDetails.firstName} 🙏
          </h3>
          <div className="text-gray-600 mb-4">
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-gray-600 text-center">
          If logged in, please wait. If not, please log in.
        </p>
      )}
      <ToastContainer />
    </div>
  );
}

export default Profile;
