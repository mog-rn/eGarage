import Head from 'next/head';
import GarageCard from '../components/cards/garageCard/GarageCard';
import TestimonialsCard from '../components/cards/testimonialCard/TestimonialsCard';
import Hero from '../components/hero/Hero';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className="">
      <Head>
        <title>eGarage | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <GarageCard />
        <TestimonialsCard />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
