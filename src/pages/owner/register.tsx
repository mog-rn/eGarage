import { ArrowLeftIcon, UserCircleIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreateGarageOwnerInput } from "../../schema/owner.schema";

function RegisterAccount() {
  const router = useRouter();
  const { handleSubmit, register } = useForm<CreateGarageOwnerInput>();

  const onSubmit = () => {};
  return (
    <div className="h-screen bg-[#F6FBF2] flex items-center justify-center">
      <Head>
        <title>eGarage | Create Account</title>
      </Head>
      <div className="container w-auto bg-white rounded-lg flex flex-col justify-center shadow-lg p-5">
        {/* {error && error.message} */}
        <form onSubmit={handleSubmit(onSubmit)} className=" ">
          <h1 className="font-bold text-center w-full">Create an account</h1>
          <p className="text-xs text-center pb-5">
            Please create an account so that you can be able to add your garage
            to the site
          </p>
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-2 font-semibold">
              Username
            </label>
            <input
              type="text"
              className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
              {...register("username")}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="username" className="mb-2 font-semibold">
              Email
            </label>
            <input
              type="text"
              className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
              {...register("email")}
            />
          </div>
          <div className="mt-10">
            <button className="flex p-4 rounded-lg space-x-3 items-center px-3 bg-[#118024] text-white">
              <span>Create an account </span>
              <UserCircleIcon className="h-4" />
            </button>
          </div>
        </form>
        <div className="flex justify-between p-4 items-center">
          <button
            className="rounded-lg border-2 border-[#118024] px-4 py-2"
            onClick={() => router.push("/owner")}
          >
            Login
          </button>
          <button
            onClick={() => router.push("/")}
            className="underline decoration-[#118024] flex items-center space-x-2 underline-offset-2"
          >
            <ArrowLeftIcon className="h-4 text-[#118024]" />{" "}
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterAccount;
