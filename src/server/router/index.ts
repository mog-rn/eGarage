// src/server/router/index.ts
import { createRouter } from "./context";
import { garageRouter } from "./garage";

import { userRouter } from "./user";

export const appRouter = createRouter()
      .merge("users.", userRouter)
      .merge("garages.", garageRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
