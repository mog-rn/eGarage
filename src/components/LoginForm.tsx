import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "../schema/user.schema";
import { trpc } from "../utils/trpc";

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
  const { handleSubmit, register } = useForm<CreateUserInput>();
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["users.request-otp"], {
    onSuccess: () => {
      setSuccess(true);
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
    <div
      className="bg-white container shadow-xl flex flex-col items-center 
          justify-between p-5 rounded-lg h-auto w-auto space-y-5"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {error && error.message}

        {success && <p>Check your email</p>}
        <h1 className="text-center text-lg font-bold ">Login</h1>

        <p className="text-center text-sm pb-5">Welcome back to eGarage.</p>

        <div className="flex flex-col">
          <input
            type="email"
            placeholder="jane.doe@example.com"
            {...register("email")}
            className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
          />
          <button className="border w-24 mt-5 bg-[#118024]/90 text-white px-2 py-3 rounded-lg border-transparent">
            Login
          </button>
        </div>
      </form>
      <Link href="/register">Register</Link>
    </div>
  );
}

export default LoginForm;
