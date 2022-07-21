import Head from 'next/head';
import GarageCard from '../modules/components/cards/garageCard/GarageCard';
import TestimonialsCard from '../modules/components/cards/testimonialCard/TestimonialsCard';
import Hero from '../modules/components/hero/Hero';
import PrimaryLayout from '../modules/components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className="">
      <Head>
        <title>eGarage | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <GarageCard />
        <TestimonialsCard />
      </main>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
