import { AppRouter } from "../server/router/index";
import { createContext, useContext } from "react";
import { inferProcedureOutput } from "@trpc/server";

type TQuery = keyof AppRouter["_def"]["queries"];

type inferQueryOutput<TRouteKey extends TQuery> = inferProcedureOutput<
  AppRouter["_def"]["queries"][TRouteKey]
>;

const UserContext = createContext<inferQueryOutput<"users.me">>(null);

function UserContextProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: inferQueryOutput<"users.me"> | undefined;
}) {
    return <UserContext.Provider value={value || null}>{children}</UserContext.Provider>;
}


const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };