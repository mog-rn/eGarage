import { getSingleGarageSchema } from "./../../schema/garage.schema";
import { createGarageSchema } from "../../schema/garage.schema";
import { createRouter } from "./context";
import * as trpc from "@trpc/server";

export const garageRouter = createRouter()
  .mutation("create-garage", {
    input: createGarageSchema,
    async resolve({ ctx, input }) {
      if (!ctx.user) {
        return new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "You must be logged in to create a garage",
        });
      }

      const garage = await ctx.prisma.garage.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.user.id,
            },
          },
        },
      });

      return garage;
    },
  })
  .query("garages", {
    async resolve({ ctx }) {
      return ctx.prisma.garage.findMany();
    },
  })
  .query("single-garage", {
    input: getSingleGarageSchema,
    async resolve({ input, ctx }) {
      return ctx.prisma.garage.findUnique({
        where: {
          id: input.garageId,
        },
      });
    },
  });
