import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "../schema/user.schema";
import { trpc } from "../utils/trpc";

const LoginForm = dynamic(() => import("../components/forms/LoginForm"), {
  ssr: false,
});

function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#F6FBF2]">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
