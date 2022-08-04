import React, { Fragment, useState } from "react";
import * as Yup from "yup";
import { Dialog, Transition } from "@headlessui/react";
import { MailOpenIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

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
  const [showSignIn, setShowSignIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const signInWithEmail = async ({}) => {
    let toastId;
    try {
    } catch (e) {
      toast.error("unable to sign in", { id: toastId });
    } finally {
      setDisabled(false);
    }
  };

  const signInWithGoogle = () => {
    setDisabled(true);
    toast.loading('Signing in with Google...')
    signIn("google", {
      callbackUrl: window.location.origin,
    })
  }

  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="text-2xl font-medium text-primary ">
        <Link href="/">eGarage</Link>
      </h1>
      {!showSignIn ? (
        <div className="text-center">
          <h3 className="font-medium">Sign up</h3>
          <p>Please create an account to get a personalized experience.</p>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="font-medium">Sign in</h3>
          <p>Welcome back to the site. Login to continue using the site...</p>
        </div>
      )}
      {/* Signin with google */}
      <div className="mt-10">
        <button
          className="w-full border flex items-center px-10 py-2 rounded-lg"
          // disabled={disabled}
          onClick={signInWithGoogle}
        >
          <Image src="/google.svg" width={32} height={32} alt="google" />
          Sign {showSignIn ? "in" : "up"} with Google
        </button>
      </div>
      <div className="flex items-center py-4">
        <div className="flex-grow h-px bg-gray-400"></div>
        <span className="flex-shrink text-xl text-gray-500 px-4 italic font-light">
          or
        </span>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>
      {/* Sign in with email */}
      {/* <div className="mt-10">
        <Formik
          initialValues={{ email: "" }}
          validationSchema={signInSchema}
          onSubmit={signInWithEmail}
        >
          {({ resetForm, isValid, values }) => (
            <Form className="flex flex-col space-y-3">
              <input
                name="email"
                type="email"
                placeholder="elon@spacex.com"
                className="border px-10 py-2 rounded-lg"
              />
              <button
                className="border-transparent py-2 rounded-lg bg-primary text-white"
                type="submit"
              >
                {isSubmitting
                  ? "Loading..."
                  : `Sign ${showSignIn ? "in" : "up"}`}
              </button>

              <p className="text-center text-sm tet-gray-500">
                {showSignIn ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      onClick={() => {
                        setShowSignIn(false);
                        signInWithEmail;
                      }}
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => {
                        setShowSignIn(true);
                        resetForm();
                      }}
                    >
                      Login
                    </button>
                  </>
                )}
              </p>
            </Form>
          )}
        </Formik>
      </div> */}
    </div>
  );
};

export default AuthModal;
