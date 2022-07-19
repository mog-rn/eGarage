import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { getAuthenticatedUser } from '../lib/common';
import { API_ROUTES, APP_ROUTES } from '../graphql/utils/constants';
import axios from 'axios';
// import Link from 'next/link';
import Router from 'next/router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const redirectIfAuthenticated = async () => {
    const isUserAuthenticated = await getAuthenticatedUser();
    if (isUserAuthenticated?.authenticated) {
      Router.push('/dashboard');
    }
  };

  useEffect(() => {
    redirectIfAuthenticated();
  }, []);

  const signUp = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'post',
        url: API_ROUTES.SIGN_UP,
        data: {
          email,
          password,
          firstname,
          lastname,
        },
      });
      if (!response?.data?.token) {
        console.log('Something went wrong during signing up: ', response);
        return;
      }
      Router.push(APP_ROUTES.SIGN_IN);
    } catch (e: any) {
      console.log('Something went wrong while creating an account', e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Head>
        <title>eGarage | Signup</title>
      </Head>

      <div
        className="container border-2 h-84 md:w-[600px] rounded-md 
       shadow-md grid grid-cols-2 px-4 mx-auto"
      >
        {/* Image */}
        <div></div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-3 py-8 items-center overflow-y justify-start"
        >
          <h1 className="font-bold text-lg">Sign Up</h1>
          <p className="text-xs text-green text-opacity-80">
            Welcome to eGarage!
          </p>
          <div className="flex flex-col space-y-5 justify-center">
            <div className="flex space-x-2">
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="firstname">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  className="w-32 text-start h-2 rounded-xl outline-none focus:outline-none p-5 text-gray-400 focus:border-gray-400 border-2 border-transparent
            transition duration-500 ease-in-out "
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  className="w-32 text-start h-2 rounded-xl outline-none focus:outline-none p-5 text-gray-400 focus:border-gray-400 border-2 border-transparent
            transition duration-500 ease-in-out "
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-64 text-start h-2 rounded-xl outline-none focus:outline-none p-5 text-gray-400 focus:border-gray-400 border-2 border-transparent
            transition duration-500 ease-in-out "
              />
            </div>
            <div className="items-center">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-64 h-8 rounded-xl outline-none focus:outline-none p-5 text-gray-400 focus:border-gray-400 border-2 border-transparent
            transition duration-500 ease-in-out "
              />
            </div>
          </div>
          {/* Login buttons */}
          <div>
            <button
              onClick={signUp}
              className="bg-green px-5 py-2 text-[#fff] rounded-lg"
            >
              {isLoading ? (
                <div className="mr-2 w-5 h-f border-l-2 rounded-full animate-spin" />
              ) : null}
              <span>Register</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
