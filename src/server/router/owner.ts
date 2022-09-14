import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as trpc from "@trpc/server";
import {
  createGarageOwnerSchema,
  requestOtpSchema,
  verifyOtpSchema,
} from "./../../schema/owner.schema";
import { createRouter } from "./context";
import { sendLoginEmail } from "../../utils/mailer";
import { baseUrl, url } from "../../constants";
import { decode, encode } from "../../utils/base64";
import { signJwt } from "../../utils/jwt";
import { serialize } from "cookie";

export const ownerRouter = createRouter()
  .mutation("register-owner", {
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
  })
  .mutation("request-otp", {
    input: requestOtpSchema,
    async resolve({ ctx, input }) {
      const { email, redirect } = input;

      const owner = await ctx.prisma.garageOwner.findUnique({
        where: {
          email,
        },
      });

      if (!owner) {
        throw new trpc.TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      const token = await ctx.prisma.ownerToken.create({
        data: {
          redirect,
          owner: {
            connect: {
              id: owner.id,
            },
          },
        },
      });
      // send email to user
      sendLoginEmail({
        token: encode(`${token.id}:${owner.email}`),
        url: baseUrl,
        email: owner?.email,
      });

      return true;
    },
  })
  .query("verify-otp", {
    input: verifyOtpSchema,
    async resolve({ ctx, input }) {
      const decoded = decode(input.hash).split(":");

      const [id, email] = decoded;

      const token = await ctx.prisma.ownerToken.findFirst({
        where: {
          id,
          owner: {
            email,
          },
        },
        include: {
          owner: true,
        },
      });

      if (!token) {
        throw new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "Invalid token",
        });
      }

      const jwt = signJwt({
        email: token.owner.email,
        id: token.owner.id,
      });

      ctx.res.setHeader(
        "Set-Cookie",
        serialize("token", jwt, { path: "/", httpOnly: true, maxAge: 60 * 5 })
      );

      return {
        redirect: token.redirect,
      };
    },
  })
  .query("me", {
    async resolve({ ctx }) {
      return ctx.owner;
    },
  });
