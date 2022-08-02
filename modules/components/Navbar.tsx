import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div
        className="h-12 shadow-lg bg-secondary w-full flex items-center justify-between
      px-10"
      >
        <h1 className="text-primary text-2xl font-bold">MyGarage</h1>
        <div>
          <ul className="hidden md:flex space-x-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
            <button className="bg-primary text-white px-4 py-2 rounded-xl">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
