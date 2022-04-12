import Head from "next/head";
import Garages from "../components/Garages";
import NavBar from "../components/reusables/NavBar";

export default function Home() {
  return (
    <div className="h-screen relative">
      <Head>
        <title>eGarage</title>
        <meta
          name="description"
          content="This a web application that helps locate garages easily"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <NavBar />      
    </div>
  );
}
