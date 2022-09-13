import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as trpc from "@trpc/server";
import { createGarageOwnerSchema } from "./../../schema/owner.schema";
import { createRouter } from "./context";

export const ownerRouter = createRouter().mutation("register-owner", {
  input: createGarageOwnerSchema,
  async resolve({ ctx, input }) {
    const { username, email } = input;

    try {
      const owner = await ctx.prisma.garageOwner.create({
        data: {
          username,
          email,
        },
      });
      return owner;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          throw new trpc.TRPCError({
            code: "CONFLICT",
            message: "User already exists",
          });
        }
      }

      throw new trpc.TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    }
  },
});
