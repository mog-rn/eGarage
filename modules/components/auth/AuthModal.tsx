import React, { Fragment, useState } from "react";
import * as Yup from "yup";
import { Dialog, Transition } from "@headlessui/react";
import { MailOpenIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field } from "formik";

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid Email Address")
    .required("This field is required"),
});

// const Confirm = ({ show = false, email = "" }) => {
//   <Transition appear show={show} as={Fragment}>
//     <div className="fixed inset-0 z-50">
//       <Transition.Child
//         as={Fragment}
//         enter="ease-out duration-300"
//         enterFrom="opacity-0"
//         enterTo="opacity-100"
//         leave="ease-in duration-300"
//         leaveFrom="opacity-100"
//         leaveTo="opacity-0"
//       >
//         <div className="fixed inset-0 bg-white" />
//       </Transition.Child>

//       <Transition.Child
//         as={Fragment}
//         enter="ease-out duration-300"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="ease-in duration-300"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         <div className="flex">
//           <div className="overflow-hidden transition-all transform">
//             <h3 className="text-center text-lg font-medium leading-6">
//               <div className="flex flex-col justify-center items-center space-y-4">
//                 <MailOpenIcon className="h-12 w-12 text-primary shrink-0" />
//               </div>
//               <p className="text-2xl font-semibold mt-2">Confirm your email</p>
//             </h3>
//           </div>
//         </div>
//       </Transition.Child>
//     </div>
//   </Transition>;
// };

const AuthModal = ({ show = false, onClose = () => {} }) => {
  const signInWithEmail = () => {};
  const [showSignIn, setShowsignIn] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-medium text-primary ">
        <Link href="/">eGarage</Link>
      </h1>
      {!showSignIn ? (
        <div className="text-center">
          <h3 className="font-medium">Sign up</h3>
          <p>Please create an account to get a personalized experience.</p>
        </div>
      ) : null}
      {/* Signin with google */}
      <div className="mt-10">
        <button
          className="w-full border flex items-center px-10 py-2 rounded-lg"
          // disabled={disabled}
        >
          <Image src="/google.svg" width={32} height={32} alt="google" />
          Sign {showSignIn ? "in" : "up"} with Google
        </button>
      </div>
      {/* Sign in with email */}
      <div className="mt-10">
        <Formik
          initialValues={{ email: "" }}
          validationSchema={signInSchema}
          onSubmit={signInWithEmail}
        >
          <Form className="mt-4">
            <input
              name="email"
              type="email"
              placeholder="elon@spacex.com"
              className="border px-10 py-2 rounded-lg"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AuthModal;
