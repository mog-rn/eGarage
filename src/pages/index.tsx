import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>eGarage | Making your next garage search easier</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="" />
      </Head>

      <h1>Welcome to eGaratge</h1>
    </>
  );
};

export default Home;

