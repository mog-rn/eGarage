import Head from "next/head";
import Garages from "../components/Garages";
import Footer from "../components/reusables/Footer";
import NavBar from "../components/reusables/NavBar";
import Testimonials from "../components/Testimonials";

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
      
      <main className="scrollbar">
        <NavBar />

        <Testimonials />

        <Footer />
      </main>
    </div>
  );
}
