import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { CreateUserInput } from "../../schema/user.schema";
import { trpc } from "../../utils/trpc";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  const { handleSubmit, register } = useForm<CreateUserInput>();
  const router = useRouter();

  const notify = () => toast.success("User has been created successfully");

  const { mutate, error } = trpc.useMutation(["users.register-user"], {
    onError: () => {},
    onSuccess: () => {
      router.push("/login");
    },
  });

  function onSubmit(values: CreateUserInput) {
    mutate(values);
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
      <div
        className="container border-transparent bg-white flex-col flex items-center rounded-lg 
        p-5 h-auto w-auto space-y-10"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && error.message}
          <h1 className="text-center text-lg font-bold">Register</h1>
          <p className="text-center text-sm pb-5">
            Create an account to access the services.
          </p>

          <div className="flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold pb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                {...register("email")}
                className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username" className="font-semibold pb-2 pt-2">
                Username
              </label>
              <input
                type="text"
                placeholder="John"
                {...register("name")}
                className="border border-[#118024]/50 w-96 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#118024] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex justify-around item-center">
            <button
              type="submit"
              onClick={notify}
              className="border w-full mt-5 bg-[#118024]/90 text-white px-2 py-3 rounded-lg border-transparent"
            >
              Submit
            </button>
          </div>
        </form>

        <button
          className="flex items-center justify-center space-x-1 border-[#118024] border-2 w-full px-2 py-3 mt-5 rounded-lg"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
