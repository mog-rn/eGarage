import Head from 'next/head';
import React from 'react';
import Register from '../modules/components/auth/Register';

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

export default RegisterPage;
