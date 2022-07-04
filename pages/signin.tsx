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
        className="container border-2 h-72 md:w-[600px] rounded-md 
       shadow-md grid grid-cols-2"
      >
        {/* Image */}
        <div></div>
        <div>
            <input type="email" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
