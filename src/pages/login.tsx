import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "../schema/user.schema";
import { trpc } from "../utils/trpc";

const LoginForm = dynamic(() => import('../components/LoginForm'), {
    ssr: false
})

function VerifyToken({hash}: {hash: string}) {
    const router = useRouter()
    const { data, isLoading } = trpc.useQuery(['users.verify-otp', {
        hash
    }])

    if (isLoading) {
        return <p>Verifying...</p>
    }

    router.push(data?.redirect.includes('login') ? '/' : data?.redirect || '/')

    return <p>Redirecting...</p>
}

function LoginPage() {
    return <div>
        <LoginForm />
    </div>
   
}

export default LoginPage;