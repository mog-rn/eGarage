import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import axios from "axios";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    await axios.get("/api/login");
    signIn("credentials", {
      email, password, callbackUrl: `${window.location.origin}/dashboard`, redirect: false,
    }).then((result) => {
      if (result.error !== null) {
        if (result.status === 401) {
          setLoginError("Your email/password combination is incorrect. Please try again.");
        } else {
          setLoginError(result.error)
        }
      } else {
        router.push(result.url);
      }
    })
  };

  return (
    <div className="space-y-5 scrollbar-hide">
      <h1 className="text-4xl mt-5 font-bold">Login </h1>
      <p>Welcome back! Please enter your details.</p>
      <form onSubmit={handleLogin}>
        {loginError}
        <div className="">
          <label htmlFor="username">Email Address</label>
          <div
            className="border-gray-400  rounded-md mt-3 h-12 w-full px-5 flex
             outline-none border-2 focus:border-[#118024]"
          >
            <input
              type="email"
              name="email"
              value={user}
              onChange={(e) => setUser(e.target.value)}
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
          <div className="mt-5 space-y-3 pb-3">
            <button
              className="bg-[#118024] text-white rounded-xl border-[#118024] p-3 w-full"
              type="submit"
            >
              Login
            </button>
            {/* <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-lg font-bold">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <button className="bg-white border-gray-400 border-4  rounded-xl flex flex-row items-center px-3 justify-center w-full">
              <FcGoogle className="mr-3 h-12 w-12" />
              Continue with Google
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
