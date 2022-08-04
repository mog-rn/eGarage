import Head from "next/head";
import React, { useState } from "react";
import AuthModal from "../auth/AuthModal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import TopNavBar from "../navigation/TopNavBar";

interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const { data: session, status } = useSession();

  const user = session?.user

  const isloadingUser = status === "loading"


  return (
    <>
      <Head>
        <title>eGarage | simplifying your next garage search</title>
      </Head>
      {/* min-h-screen */}
      <TopNavBar />
      <main>
        {children}
        {/* <AuthModal show={showModal} onClose={closeModal} /> */}
      </main>
    </>
  );
};

export default PrimaryLayout;
