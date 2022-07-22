import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import Register from '../modules/components/auth/Register';
import { prisma } from '../lib/prisma';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const testQuery = gql`
  {
    test(bool: true)
  }
`;

const RegisterPage = () => {
  const { data, loading } = useQuery(testQuery, {
    notifyOnNetworkStatusChange: true,
  }); 
    
  return (
    <>
      <Head>
        <title>eGarage | Register</title>
      </Head>
      <div>{JSON.stringify(data?.garage)}</div>
      <Register />
    </>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo({ ctx: { req, prisma } });

  await apolloClient.query({ query: testQuery });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default RegisterPage;
