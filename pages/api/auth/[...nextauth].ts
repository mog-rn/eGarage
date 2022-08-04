import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import {prisma} from "../../../modules/utils/prisma";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: `${process.env.GOOGLE_AUTH_ID}`,
            clientSecret: `${process.env.GOOGLE_AUTH_SECRET}`,
        })
    ]
})