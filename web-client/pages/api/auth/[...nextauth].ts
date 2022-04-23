import NextAuth from "next-auth";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

let userAccount = null;

const prisma = new PrismaClient();

const bcrypt = require("bcrypt");

const confirmPasswordHash = (plainPassword, hashedPassword) => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, (err, res) => {
      if (err) {
        resolve(false);
      } else {
        resolve(res);
      }
    });
  });
};

const configuration = {
  cookie: {
    secure: process.env.NODE_ENV && process.env.NODE_ENV === "production",
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {},
      async authorize(credentials: any, req) {
        try {
          const user = await prisma.users.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (user !== null) {
            //compare the hash
            const res = await confirmPasswordHash(
              credentials.password,
              user.password
            );
            if (res) {
              userAccount = {
                userId: user.userId,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                userType: user.userType,
                isActive: user.isActive,
              };
              return userAccount;
            } else {
              console.log("Hash not matched logging in");
              return null;
            }
          } else {
            return null;
          }
        } catch (error) {
          console.log("Authorize error: ", error);
        }
      },
    }),
  ],

  callbacks: {
    async signIn(user, account, profile) {
      try {
        //  The user object is wrapped in another user object so extra it
        user = user.user;
        console.log("Sign in callback: ", user);
        console.log("User id: ", user.userId);
        if (typeof user.userId !== typeof undefined) {
          if (user.isActive) {
            console.log("User is active");
            return user;
          } else {
            console.log("User is not active");
            return false;
          }
        } else {
          console.log("User id was not defined");
          return false;
        }
      } catch (err) {
        console.error("Signin callback error: ", err);
      }
    },

    async register(firstName, lastName, email, password, userType) {
      try {
        await prisma.users.create({
          data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            userType: userType,
          },
        });
        return true;
      } catch (err) {
        console.error("Failed to register user. Error", err);
        return false;
      }
    },

    async session(session, token) {
      if (userAccount !== null) {
        // session user = userAccount
        session.user = {
          userId: userAccount.userId,
          name: `${userAccount.firstName} ${userAccount.lastName}`,
          email: userAccount.email,
          userType: userAccount.userType,
        };
      } else if (
        typeof token.user !== typeof undefined &&
        (typeof session.user === typeof undefined ||
          (typeof session.user !== typeof undefined &&
            typeof session.user.userId === typeof undefined))
      ) {
        session.user = token.user;
      } else if (typeof token !== typeof undefined) {
        session.token = token;
      }
      return session;
    },

    async jwt(token, user, account, profile, isNewUser) {
      console.log("JWT callback. Got User: ", user);
      if (typeof user !== typeof undefined) {
        token.user = user;
      }
      return token;
    },
  },
};

export default (req, res) => NextAuth(req, res, configuration);