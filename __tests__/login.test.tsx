import Login from "../src/pages/login";
import { cleanup, render, screen } from "@testing-library/react";
import { trpc } from "../src/utils/trpc";
import { act } from "react-dom/test-utils";

// import trpc from '../src/utils/trpc';

jest.mock("../src/utils/trpc");

afterEach(cleanup);

describe("Login", () => {
  it("Displays login page content", async () => {
    
  });
});
