import Head from "next/head";
import React from "react";
import Navbar from "@/components/Navbar";

interface IPrimaryLayout {
    children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({children}) => {
  return <>
  <Head>
    <title>eGarage | simplifying your next garage search</title>
  </Head>
{/* min-h-screen */}
  <div className=" flex flex-col">
    <Navbar />
  </div>
  <main>{children}</main>
</>;
};

export default PrimaryLayout;
