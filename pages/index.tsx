import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className="">
      <Head>
        <title>eGarage | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>myGarage</h1>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  )
}
