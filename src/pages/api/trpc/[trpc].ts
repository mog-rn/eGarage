// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/router";
import { createContext } from "../../../server/router/context";
import * as trpcNext from '@trpc/server/adapters/next'


// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({error}){
    if(error.code === "INTERNAL_SERVER_ERROR") {
      console.error('Something went wrong', error)
    } else {
      console.error(error);
      
    }
  }
});
