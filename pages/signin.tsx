import React from 'react';
import { getAuthenticatedUser, storeTokenInLocalStorage } from '../lib/common';
import { useState, useEffect } from 'react';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';
import axios from 'axios';
import Link from 'next/link';
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
          password,
        },
      });

      if (!response?.data?.token) {
        console.log('Something went wrong during signing in', response);
        return;
      }
      storeTokenInLocalStorage(response.data.token);
      Router.push(APP_ROUTES.HOME);
    } catch (e) {
      console.log('Something went wrong during signing in: ', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div
        className="container border-2 h-84 md:w-[600px] rounded-md 
       shadow-md grid grid-cols-2"
      >
        {/* Image */}
        <div></div>
        <form className='flex flex-col space-y-3 py-3 items-center justify-start'>
            <h1 className='font-bold text-lg'>Sign In</h1>
            <p className='text-xs text-green text-opacity-80'>Welcome back to eGarage!</p>
          <div className='flex flex-col'>
            <label className='text-sm' htmlFor="email">Email</label>
            <input type="email" name="" id="" className='w-72 h-8 rounded-xl outline-none focus:outline-none p-5 text-gray-400 focus:border-gray-400 border-2 border-transparent
            transition duration-500 ease-in-out ' />
          </div>
          <div>
            <label className='text-sm' htmlFor="password">Password</label>
            <input type="password" name="" id="" className='w-72 h-8 rounded-xl outline-none focus:outline-none p-5 text-gray-400 focus:border-gray-400 border-2 border-transparent
            transition duration-500 ease-in-out ' />
          </div>
          {/* Login buttons */}
          <div>
            <button className='bg-green px-5 py-2 text-[#fff] rounded-lg'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
