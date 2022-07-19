import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";
import { decodeAuthHeader, AuthTokenPayload } from "./utils/auth";


export type Context = {
    prisma: PrismaClient;
    user_id: number;
}

export async function createContext({req, res}): Promise<Context> {
    const token = 
        req && req.headers.authorization 
        ? decodeAuthHeader(req.headers.authorization)
        : null;

        
    return {
        prisma,
        user_id: token?.user_id,
    }
}