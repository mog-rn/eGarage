// src/server/router/index.ts
import { createRouter } from "./context";

import { protectedExampleRouter } from "./protected-example-router";

import { userRouter } from "./user";

export const appRouter = createRouter()
  .merge("users.", userRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
