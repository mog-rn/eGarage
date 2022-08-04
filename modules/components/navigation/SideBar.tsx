import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ChatAlt2Icon,
  ChatIcon,
  LogoutIcon,
  SearchIcon,
  SparklesIcon,
  UserCircleIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

const SideBar = () => {
  const { data: session, status } = useSession();

  const [currentLink, setCurrentLink] = React.useState(1);

  const user = session?.user;

  return (
    <div className="h-[95vh]  shadow-lg rounded-lg p-6 bg-white relative">
      {user?.image && (
        <div className="flex flex-col space-y-10">
          <div className="flex space-x-5 items-center">
            <div className="h-16 w-16 relative rounded-full border">
              <Image src={user?.image} layout="fill" className="rounded-full" />
            </div>
            <p className="tracking-wide w-36 font-medium">
              Welcome back,{" "}
              <span className="text-primary font-semibold">{user?.name}</span>{" "}
            </p>
          </div>
          {/* Navigation links */}
          <div>
            <ul className="space-y-3">
              <li
                className={`${
                  currentLink === 1 ? "active" : "none"
                } flex items-center space-x-3 text-grey w-full border-transparent bg-white rounded-xl 
                        hover:scale-105 transform ease-out duration-300 p-2`}
                onClick={() => setCurrentLink(1)}
              >
                <ViewGridIcon className="w-6 h-6" />
                <Link href="/" className="">
                  Dashboard
                </Link>
              </li>
              <li
                className={`${
                  currentLink === 2 ? "active" : "none"
                } flex items-center space-x-3 text-grey w-full border-transparent bg-white rounded-xl 
                        hover:scale-105 transform ease-out duration-300 p-2`}
                onClick={() => setCurrentLink(2)}
              >
                <SearchIcon className="w-6 h-6" />
                <Link href="/search" className="">
                  Search
                </Link>
              </li>
              <li
                className="flex items-center space-x-3 text-grey w-full border-transparent bg-white rounded-xl 
                        hover:scale-105 transform ease-out duration-300 p-2"
                onClick={() => setCurrentLink(3)}
              >
                <SparklesIcon className="w-6 h-6" />
                <Link href="/" className="">
                  Reviews
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(4)}
                className="flex items-center space-x-3 text-grey w-full border-transparent bg-white rounded-xl 
                        hover:scale-105 transform ease-out duration-300 p-2"
              >
                <ChatAlt2Icon className="w-6 h-6" />
                <Link href="/" className="">
                  FAQs
                </Link>
              </li>
              <li
              onClick={() => setCurrentLink(5)}
                className="flex items-center space-x-3 text-grey w-full border-transparent bg-white rounded-xl 
                        hover:scale-105 transform ease-out duration-300 p-2"
              >
                <UserCircleIcon className="w-6 h-6" />
                <Link href="/" className="">
                  Account
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-5 p-3">
            <button
              onClick={() => signOut}
              className="flex items-center text-grey"
            >
              <LogoutIcon className="mr-3 h-6 w-6" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
