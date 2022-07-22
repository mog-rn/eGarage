import React from 'react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { LoginInput } from '../forms/LoginInput';

const Register = () => {
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
          firstname: Yup.string().required('Firstname is required'),
          lastname: Yup.string().required('Lastname is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
          role: Yup.string().required('Role is required'),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <div className="flex items-center justify-center bg-white h-screen">
          <Form className="container border w-auto h-auto flex flex-col space-y-10 justify-center shadow-lg rounded-lg p-5">
            <h1 className="font-bold text-2xl">Register</h1>
            <div className="flex">
              <LoginInput name="firstname" label="Firstname" />
              <LoginInput name="lastname" label="Lastname" />
            </div>
            <LoginInput name="email" label="Email" />
            <LoginInput name="password" label="Password" type="password" />
            <LoginInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
            <LoginInput name="role" label="Role" />
            <div className="space-x-3 flex">
              <button
                onClick={() => router.push('/login')}
                className="w-1/2 border-green text-green border-2 rounded-lg py-2"
              >
                Login
              </button>
              <button
                type="submit"
                className="w-1/2 bg-green rounded-lg text-white py-2 border-2 border-transparent"
              >
                Sign Up
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default Register;
