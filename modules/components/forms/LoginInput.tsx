import { ErrorMessage, Field, FieldInputProps, Form, useField } from 'formik';
import React from 'react';

type Props = { name: string; label: string; type?: string };

export const LoginInput: React.FC<Props> = ({ name, label, ...props }) => {
  const [field, meta] = useField({ name });
  return (
    <>
      <div className="flex space-x-3">
        <label className="font-semibold">{label}</label>
        <Field {...props} {...field} className="focus:border-green" />
        {meta.touched && meta.error ? (
          <div className="text-red-900" />
        ) : null}
        <ErrorMessage name={name} component="div" className='text-red-500' />
      </div>
    </>
  );
};
