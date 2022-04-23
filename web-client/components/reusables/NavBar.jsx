import Link from "next/link";
import React from "react";
import {useSession, signIn, } from "next-auth/react"

const NavBar = () => {
  return (
    <div className="fixed z-50  flex items-center justify-between p-8 h-6 w-full shadow-md  bg-[#F6FBF2]">
      {/* logo */}
      <div className="ml-20">
        <h1 className="text-3xl text-[#118024] font-bold">
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
        <button
          className="text-[#118024] text-lg w-auto h-[45px]"
          onClick={() => signIn()}
        >
          Sign in
        </button>
        <button className="bg-[#118024] text-white text-lg px-6 py-3 w-auto rounded-md"
        onClick={() => newUser}>
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBar;
