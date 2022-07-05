import React from 'react';
import { getAuthenticatedUser, storeTokenInLocalStorage } from '../lib/common';
import { useState, useEffect } from 'react';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';
import axios from 'axios';
// import Link from 'next/link';
import Router from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const redirectIfAuthenticated = async () => {
    const isAuthenticated = await getAuthenticatedUser();
    if (isAuthenticated?.authenticated) {
      Router.push('/');
    }
  };

  useEffect(() => {
    redirectIfAuthenticated();
  }, []);

  const signIn = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'post',
        url: API_ROUTES.SIGN_IN,
        data: {
          email,
          password
        }
      });
      if (!response?.data?.token) {
        console.log('Something went wrong during signing in: ', response);
        return;
      }
      storeTokenInLocalStorage(response.data.token);
      Router.push(APP_ROUTES.HOME);
    }
    catch (err) {
      console.log('Some error occured during signing in: ', err);
    }
    finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div
        className="container border-2 h-84 md:w-[600px] rounded-md 
       shadow-md grid grid-cols-2 px-4 mx-auto"
      >
        {/* Image */}
        <div></div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-3 py-8 items-center justify-start"
        >
          <h1 className="font-bold text-lg">Sign In</h1>
          <p className="text-xs text-green text-opacity-80">
            Welcome back to eGarage!
          </p>
          <div className="flex flex-col space-y-5 justify-center">
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
              onClick={signIn}
              className="bg-green px-5 py-2 text-[#fff] rounded-lg"
            >
              {
                // isLoading ? <Loading /> : null
              }
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
