import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiSpeedometer } from "react-icons/gi";
import { MdReviews } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FcFaq } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
    const [currentLink, setCurrentLink] = useState(1)

  return (
    <div className="">
      <div className="sidebar p-10 w-[45vh] bg-white h-screen flex flex-col">
        <div className="user_details flex items-center space-x-4">
          <div className="avatar  w-16 h-16 relative rounded-full">
            <Image
              src="/images/avatar.png"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div>
            <p className="flex items-center space-x-1">
              <h1 className="text-[#118024] text-xl">Hello,</h1>{" "}
              <span className="text-xl">User</span>
            </p>
          </div>
        </div>
        <div className="navigation flex items-center pt-12">
          <ul className="space-y-5">
            <li className="flex items-center space-x-2 text-xl">
              <GiSpeedometer className="" />
              <Link href="/" className={currentLink === 1 ? "active" : "none"} onClick={() => setCurrentLink(1)}>Dashboard</Link>
            </li>
            <li className="flex items-center space-x-2 text-xl">
              <AiOutlineSearch className="" />
              <Link href="/">Search</Link>
            </li>
            <li className="flex items-center space-x-2 text-xl">
              <MdReviews className="" />
              <Link href="/">Make a Review</Link>
            </li>
            <li className="flex items-center space-x-2 text-xl">
              <FcFaq className="" />
              <Link href="/">FAQs</Link>
            </li>
            <li className="flex items-center space-x-2 text-xl">
              <BiUserCircle className="" />
              <Link href="/">Account</Link>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-10">
          <button className="flex items-center space-x-2">
            <FiLogOut className="" />
            <Link href="/">Logout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
