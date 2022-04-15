import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import RegistrationForm from "../components/forms/RegistrationForm";
import Navbar from "../components/reusables/NavBar";

const Register = () => {
  return (
    <div className="h-screen">      {" "}
      <div className="pb-1"><Navbar /></div>
      <div className="bg-[#EAE8DF] flex h-screen overflow-hidden px-12 scrollbar-hide py-16 space-y-5">
        <Head>
          <title>Create an Account</title>
        </Head>
        <div className="container w-full shadow-green-600 flex flex-row justify-items-center mx-auto rounded-3xl bg-white">
          {/* right */}
          <div className="relative w-1/2 rounded-3xl h-auto">
            <img
              src="https://avatars.githubusercontent.com/u/61131314?v=4"
              alt="image"
              className="h-full w-full rounded-3xl"
            />
            <div
              className="text-white space-y-8 absolute top-10 p-10 bg-[#118024]/25 bg-opacity-80 rounded-xl
                   h-5/6 ml-16 w-5/6  mr-16 px-16 bg-clip-padding backdrop-blur-sm"
              filter={"blur(10px) sepia(50%)"}
            >
              <h1 className="">MyGarage</h1>
              <h2>Lorem ipsum mou</h2>
              <p>
                Lorem ipsum dolor sit amet, con commodo sed egestas egestas
                fringilla phasellus faucibus
              </p>
              <div className="bottom-5 absolute">
                <p>Already have an account?</p>
                <button>
                  <Link href="/login">Sign in</Link>
                </button>
              </div>
            </div>
          </div>
          {/* left */}
          <div className="px-12 flex-grow w-1/2 overflow-y-scroll space-y-8 py-2">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
