import React from 'react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { LoginInput } from '../forms/LoginInput';

const Login = () => {
  const router = useRouter();

  return (
    <div>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <div className="flex items-center justify-center bg-white h-screen">
          <Form className="container border w-auto h-auto flex flex-col space-y-10 justify-center shadow-lg rounded-lg p-5">
            <h1 className="font-bold text-2xl">Login</h1>
            <LoginInput name="email" label="Email" />
            <LoginInput name="password" label="Password" type="password" />

            <div className="space-x-3 flex">
              <button
                onClick={() => router.back()}
                className="w-1/2 border-green text-green border-2 rounded-lg py-2"
              >
                {/* Back Icon */}
                back
              </button>
              <button
                onClick={() => router.push('/')}
                type="submit"
                className="w-1/2 bg-green rounded-lg text-white py-2 border-2 border-transparent"
              >
                Login
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default Login;
