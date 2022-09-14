import Head from "next/head";
import { InboxInIcon, UserCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreateGarageOwnerInput } from "../../schema/owner.schema";
import { trpc } from "../../utils/trpc";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VerifyToken({ hash }: { hash: string }) {
  const router = useRouter();

  const { data, isLoading } = trpc.useQuery([
    "owners.verify-otp",
    {
      hash,
    },
  ]);

  if (isLoading) {
    return <p>Verifying...</p>;
  }

  router.push(
    data?.redirect.includes("login")
      ? "/garages/new"
      : data?.redirect || "/owner"
  );

  return <p>Redirecting...</p>;
}

function GarageOwnerLoginForm() {
  const router = useRouter();

  const notify = () => toast.success("Check your email for the OTP");

  const [success, setSuccess] = useState(false);

  const { handleSubmit, register } = useForm<CreateGarageOwnerInput>();

  const { mutate, error } = trpc.useMutation(["owners.request-otp"], {
    onSuccess: () => {
      setSuccess(true);
      // notify()
    },
  });

  function onSubmit(values: CreateGarageOwnerInput) {
    mutate({ ...values, redirect: router.asPath });
  }

  const hash = router.asPath.split("#token=")[1];

  if (hash) {
    return <VerifyToken hash={hash} />;
  }
  
  return (
    <div className="h-screen bg-[#F6FBF2] flex items-center justify-center">
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
      <Head>
        <title>eGarage | Owner</title>
      </Head>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container bg-white w-auto p-5 flex 
      items-center justify-center rounded-lg shadow-lg flex-col"
      >
        <h1 className="font-bold text-xl">Garage Owner Sign in</h1>
        <p className="text-sm tracking-wide">
          Please login to be able to add your garage
        </p>

        <div className="p-5">
          <div className="flex flex-col space-y-3">
            <label htmlFor="email" className="font-semibold">
              Email address
            </label>
            <input
              type="text"
              placeholder="john.doe@gmail.com"
              {...register("email")}
              className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
            />
            <div className="flex justify-around w-full space-x-5">
              <button className="rounded-lg flex w-auto bg-[#118024] px-3 py-3 text-white justify-center space-x-4">
                <span>Send magic link</span> <InboxInIcon className="h-6" />{" "}
              </button>
              {/* <button
                className="rounded-lg text-black flex w-auto bg-[#F6FBF2] py-3 px-3
               text-white border-2 border-[#118024] justify-center space-x-4"
                // onClick={() => router.push("/owner/register")}
              >
                <span>Create an account</span>{" "}
                <UserCircleIcon className="h-6 text-[#118024]/80" />{" "}
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GarageOwnerLoginForm;
