import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

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
          <div className="container border w-96 h-96 ">
            <h1>Register</h1>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default Authentication;
