import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "../../schema/user.schema";
import { trpc } from "../../utils/trpc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

function VerifyToken({ hash }: { hash: string }) {
  const router = useRouter();

  const { data, isLoading } = trpc.useQuery([
    "users.verify-otp",
    {
      hash,
    },
  ]);

  if (isLoading) {
    return <p>Verifying...</p>;
  }

  router.push(data?.redirect.includes("login") ? "/" : data?.redirect || "/");

  return <p>Redirecting...</p>;
}

function LoginForm() {
  const notify = () => toast.success("Check your email for the OTP");

  const { handleSubmit, register } = useForm<CreateUserInput>();
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["users.request-otp"], {
    onSuccess: () => {
      setSuccess(true);
      notify();
    },
  });

  function onSubmit(values: CreateUserInput) {
    mutate({ ...values, redirect: router.asPath });
  }

  const hash = router.asPath.split("#token=")[1];

  if (hash) {
    return <VerifyToken hash={hash} />;
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={20000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className="bg-white container shadow-xl flex flex-col items-center 
          justify-between p-5 rounded-lg h-auto w-auto space-y-5"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {error && error.message}

          {success && <></>}
          <h1 className="text-center text-lg font-bold ">Login</h1>

          <p className="text-center text-sm pb-5">Welcome back to eGarage.</p>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">Email</label>
            <p className="text-xs italic pb-2">Enter the email you used to create an account with.</p>
            <input
              type="email"
              placeholder="jane.doe@example.com"
              {...register("email")}
              className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
            />
            <div className="flex justify-around items-center">
              <button
                className="border w-full mt-5 bg-[#118024]/90 text-white px-2 py-3 rounded-lg border-transparent"
                onSubmit={notify}
              >
                Login
              </button>
              
            </div>
          </div>
        </form>
        <button className="flex items-center justify-center space-x-1 border-[#118024] border-2 w-full px-2 py-3 mt-5 rounded-lg">
                {/* <ArrowRightIcon className="h-6 w-4 text-[#118024]" /> */}
                <Link href="/register">Register</Link>
              </button>
      </div>
    </div>
  );
}

export default LoginForm;
