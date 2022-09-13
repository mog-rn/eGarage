// src/server/router/index.ts
import { createRouter } from "./context";
import { garageRouter } from "./garage";
import { ownerRouter } from "./owner";

import { userRouter } from "./user";

export const appRouter = createRouter()
      .merge("users.", userRouter)
      .merge("garages.", garageRouter)
      .merge("owners.", ownerRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
