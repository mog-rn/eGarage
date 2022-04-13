import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="fixed z-50  flex items-center justify-between h-16 w-full shadow-md p-10 bg-[#F6FBF2]">
      {/* logo */}
      <div className="ml-20">
        <h1 className="text-4xl text-[#118024] font-bold">
            <Link href="/">MyGarage</Link>
        </h1>
      </div>
      {/* Links */}
      <div>
        <ul className="flex text-lg flex-row space-x-20 items-end">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">Contact Us</Link>
        </ul>
      </div>
      {/* Buttons */}
      <div className="space-x-7 ">
        <button className="text-[#118024] text-lg w-auto h-[45px]">
          <Link href="/login">Sign in</Link>
        </button>
        <button className="bg-[#118024] text-white text-lg p-4 w-auto rounded-md">
          <Link href="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
