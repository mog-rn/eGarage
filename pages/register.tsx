import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { initializeApollo } from '../lib/apolloClient';
import Register from '../modules/components/auth/Register';
import {prisma} from '../lib/prisma';

const RegisterPage = () => {
  return (
    <>
    <Head>
      <title>eGarage | Register</title>
    </Head>
      <Register />
    </>
  );
};

export const getServerSideProps = async ({req}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo({ctx: {req, prisma}})
  
}

export default RegisterPage;
