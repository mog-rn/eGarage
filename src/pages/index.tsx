import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { LoginForm } from "../components";
import { useUserContext } from "../context/user.context";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import LandingPage from "../components/landing";
import Dashboard from "./users/dashboard";

const Home: NextPage = () => {
  const router = useRouter();
  const user = useUserContext();

  if (!user) {
    //  router.push("/login")
    return (
      <div className="min-h-screen bg-[@F6FBF2]">
        <LandingPage />
      </div>
    );
  } else {
    router.push("/dashboard");
  }

  return (
    <>
      <Head>
        <title>eGarage | Making your next garage search easier</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="" />
      </Head>
    </>
  );
};

export default Home;
