import React from "react";

const Banner = ({ user }) => { // Accept user as a prop
  return (
    <div className="h-12 w-full bg-[#f19d27]">
      <p className="text-xl sm:text-3xl flex justify-center">
        {user ? `Welcome, ${user.firstName || user.email}!` : "Discover the latest trends from small shops"}
      </p>
    </div>
  );
};

export default Banner;