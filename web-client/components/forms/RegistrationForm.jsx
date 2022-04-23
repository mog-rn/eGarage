import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const registerUser = (event) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-5 scrollbar-hide">
      <h1 className="text-4xl mt-5 font-bold">Sign up </h1>
      <form onSubmit={registerUser}>
        <div className="mt-3">
          <label htmlFor="first_name">First Name</label>
          <div
            className="border-gray-400  rounded-md mt-3 h-12 w-full px-5 flex
             outline-none border-2 focus:border-[#118024]"
          >
            <input
              type="text"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full h-full focus:border-green-400 outline-none"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="last_name">Last Name</label>
          <div
            className="border-gray-400  rounded-md mt-3 h-12 w-full px-5 flex
             outline-none border-2 focus:border-[#118024]"
          >
            <input
              type="text"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full h-full focus:border-green-400 outline-none"
              required
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="email">Email Address</label>
          <div
            className="border-gray-400  rounded-md mt-3 h-12 w-full px-5 flex
             outline-none border-2 focus:border-[#118024]"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full h-full focus:border-green-400 outline-none"
              required
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="password">password</label>
          <div
            className="border-gray-400  rounded-md mt-3 h-12 w-full px-5 flex
             outline-none border-2 focus:border-[#118024]"
          >
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a unique password"
              className="w-full h-full focus:border-green-400 outline-none"
              required
            />
          </div>
          <div className="mt-5">
            <input type="checkbox" className="checked:bg-[#118024]" />{" "}
            <span>Show password</span>
          </div>
          <div className="pb-4 mt-3 space-y-3">
          <label htmlFor="usertype">What type of user are you?</label>
          <div
            className=" h-5 w-auto items-center justify-between flex-grow px-4 flex focus:border-[#118024]"
          >
            <input
              type="radio"
              name="user_type"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              placeholder="Enter a unique password"
              className="w-full h-full focus:border-green-400 outline-none"
              required
            /> Automobile user
            <input
              type="radio"
              name="user_type"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              placeholder="Enter a unique password"
              className="w-full h-full focus:border-green-400 outline-none"
              required
            /> Garage Owner
          </div>
          </div>
          <div className="mt-5 space-y-3 pb-3">
            <button
              className="bg-[#118024] text-white rounded-xl border-[#118024] p-3 w-full"
              type="submit"
            >
              Sign Up
            </button>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-lg font-bold">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <button className="bg-white border-gray-400 border-4  rounded-xl flex flex-row items-center px-3 justify-center w-full">
              <FcGoogle className="mr-3 h-12 w-12" />
              Continue with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
