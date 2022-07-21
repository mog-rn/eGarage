import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { LoginInput } from '../modules/components/forms/LoginInput';

const Authentication = () => {
  return (
    <>
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
            <h1 className='font-bold text-2xl'>Register</h1>
            <LoginInput />
            <button className='bg-green px-5 py-3 rounded-xl text-white'>Get Started</button>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default Authentication;
