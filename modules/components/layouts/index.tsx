import Head from "next/head";
import React, { useState } from "react";
import AuthModal from "../auth/AuthModal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import TopNavBar from "../navigation/TopNavBar";
import SideBar from "../navigation/SideBar";

interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const { data: session, status } = useSession();

  const user = session?.user;

  const isloadingUser = status === "loading";

  return (
    <div>
      <Head>
        <title>eGarage | simplifying your next garage search</title>
      </Head>

      {isloadingUser ? (
        <div />
      ) : user ? (
        <div className="flex p-5 space-x-4 min-h-screen bg-secondary">
          <SideBar />
          <main>{children}</main>
        </div>
      ) : (
        <>
          <TopNavBar />
          <main>{children}</main>
        </>
      )}
    </div>
  );
};

export default PrimaryLayout;
