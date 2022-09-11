import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "../schema/user.schema";
import { trpc } from "../utils/trpc";

function LoginPage() {

    const { handleSubmit, register } = useForm<CreateUserInput>()
    const router = useRouter()

    // const { mutate, error } = trpc.useMutation(['users.register-user'], {
    //     onError: () => { },
    //     onSuccess: () => {
    //         router.push('/login')
    //      }
    // })

    function onSubmit(values: CreateUserInput) {
        // mutate(values)
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* {error && error.message} */}
            <h1>Register</h1>
            <input type="email" placeholder="john.doe@example.com" {...register('email')} />
            <button type="submit">Login</button>
        </form>
        <Link href="/register">Register</Link>
    </>
}

export default LoginPage;