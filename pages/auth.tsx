import AuthModal from "@/components/auth/AuthModal";
import Head from "next/head";
import React from "react";

const Auth = () => {
  return (
    <>
    <Head>
      <title>eGarage | Auth</title>
    </Head>
      <div className="flex items-center justify-center min-h-screen bg-secondary">
        <div
          className="container bg-white h-auto w-auto shadow-lg justify-center flex 
            p-10 rounded-lg"
        >
          <AuthModal />
        </div>
      </div>
    </>
  );
};

export default Auth;
