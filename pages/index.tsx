import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from "@/components/layouts/index";
import { getSession } from 'next-auth/react';

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>eGarage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className='text-2xl font-semibold'>Welcome to <span className='text-primary text-4xl font-medium'>eGarage</span></h1>
      </Layout>
    </div>
  )
}



export default Home
