import RegisterPage from "../../src/pages/register";
import { cleanup, render, screen } from "@testing-library/react";
import { trpc } from "../../src/utils/trpc";

// import trpc from '../src/utils/trpc';

// jest.mock("../src/utils/trpc");

afterEach(cleanup);

describe("Register", () => {
  it("Displays register page content", async () => {
    // render(<RegisterPage />);
    // const heading = screen.getByRole("heading", {
    // name: /Register/i,
    // });
    // expect(heading).toBeInTheDocument();
  });
});
//
// Compare this snippet from src/pages/register.tsx:
// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { CreateUserInput } from "../schema/user.schema";
// import { trpc } from "../utils/trpc";
//
// const RegisterForm = dynamic(() => import("../components/RegisterForm"), {
//   ssr: false,
// });
//
// function RegisterPage() {
//   return (
//     <div className="h-screen flex items-center justify-center bg-[#F6FBF2]">
//       <RegisterForm />
//     </div>
//   );
// }
//
// export default RegisterPage;
//
