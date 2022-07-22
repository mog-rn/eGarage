import Head from 'next/head';
import React from 'react';
import Login from '../modules/components/auth/Login';

const LoginPage = () => {
  return (
    <>
    <Head><title>eGarage | Login</title></Head>
      <Login />
    </>
  );
};

export default LoginPage;
