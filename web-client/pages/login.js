import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "../components/forms/LoginForm";
import Navbar from "../components/reusables/NavBar";

const Login = () => {
  return (
    <div className="h-screen">
      {" "}
      {/* <div className="pb-1"><Navbar /></div> */}
      <div className="bg-[#EAE8DF] flex h-screen overflow-hidden px-60 scrollbar-hide py-10 space-y-5">
        <Head>
          <title>Login</title>
        </Head>
        <div className="container w-full shadow-green-600 flex flex-row justify-items-center mx-auto rounded-3xl bg-white">
          {/* right */}
          <div className="relative w-1/2 rounded-3xl h-auto">
            <Image
              src="/images/car.jpg"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="h-full w-full rounded-3xl"
            />
            <div
              className="text-white space-y-8 absolute top-10 p-10 bg-[#118024]/25 bg-opacity-80 rounded-xl
                   h-5/6 ml-10 w-5/6 px-8 bg-clip-padding backdrop-blur-sm">
              <h1 className="text-4xl">MyGarage</h1>
              <h2 className="text-xl">Create an account</h2>
              <p className="text-sm">
                Create an account to get started with MyGarage. You can also get to have a personalized user experience while using the application.
              </p>
              <div className="bottom-5 absolute">
                <p>Dont have an account?</p>
                <button className="decoration: underline underline-offset-2">
                  <Link href="/register">Sign up</Link>
                </button>
              </div>
            </div>
          </div>
          {/* left */}
          <div className="px-12 flex-grow w-1/2 overflow-y-scroll scrollbar-hide space-y-8 py-2">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
