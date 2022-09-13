import { useRouter } from "next/router";

function AuthCheck() {
  const router = useRouter()
  return (
    <div className="h-screen bg-[#F6FBF2] flex items-center justify-center">
      <div
        className="h-auto bg-white container shadow-lg rounded-lg
      w-96 p-10 flex justify-center flex-col items-center"
      >
        <h1 className="font-bold">Auth Check</h1>
        <p>How do you want to login today?</p>
        <div className="flex justify-around w-full pt-6 space">
          <button className="border-2 border-transparent bg-[#118024] px-5 py-3 text-white rounded-lg">
            Normal user
          </button>
          <button
            className="border-2 border-[#118024]/90 bg-[#F6FBF2] px-5 py-3 text-black rounded-lg"
            onClick={() => router.push("/owner")}
          >
            Garage owner
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthCheck;
