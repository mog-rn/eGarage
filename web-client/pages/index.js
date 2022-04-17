import Head from "next/head";
import Garages from "../components/Garages";
import Hero from "../components/Hero";
import Footer from "../components/reusables/Footer";
import GarageCard from "../components/reusables/GarageCard";
import NavBar from "../components/reusables/NavBar";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="h-screen relative scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-200 
            overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Head>
        <title>eGarage</title>
        <meta
          name="description"
          content="This a web application that helps locate garages easily"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="scrollbar">
        <NavBar />

        <Hero />
        
        <GarageCard />

        <Testimonials />

        <Footer />
      </main>
    </div>
  );
}
