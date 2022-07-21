import { Field, Form } from 'formik';
import React from 'react';

interface ILoginInput {}

export const LoginInput: React.FC<ILoginInput> = () => {
  return (
    <>
      <div className="flex space-x-3">
        <div>
          <label htmlFor="firstname" className="">
            First Name
          </label>
          <Field
            name="firstname"
            type="text"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <Field
            name="lastname"
            type="text"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <Field name="role" type="text" placeholder="Enter your role" />
      </div>
    </>
  );
};
