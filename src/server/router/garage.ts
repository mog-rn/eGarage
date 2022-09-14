import { getSingleGarageSchema } from "./../../schema/garage.schema";
import { createGarageSchema } from "../../schema/garage.schema";
import { createRouter } from "./context";
import * as trpc from "@trpc/server";

export const garageRouter = createRouter()
  .mutation("create-garage", {
    input: createGarageSchema,
    async resolve({ ctx, input }) {
      if (!ctx.user) {
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "You must be logged in to create a garage",
        });
      }

      const {
        name,
        city,
        country,
        phone,
        email,
        website,
        description,
        services,
        image,
        time_close,
        time_open,
      } = input;

      const garage = await ctx.prisma.garage.create({
        data: {
          name,
          city,
          country,
          phone,
          email,
          website,
          description,
          services,
          image,
          time_close,
          time_open,
          GarageOwners: {
            connect: {
              id: ctx.user?.id,
            }
          }
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
