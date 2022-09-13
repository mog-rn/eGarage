import superjson  from 'superjson';
import { NextApiRequest, NextApiResponse } from 'next'
import { verifyJwt } from '../../utils/jwt'
import { prisma } from '../db/client'
import { router } from '@trpc/server'


interface CtxUser {
  id: string
  email: string
  name: string
  username: string
  image: string
  iat: string
  exp: number
}


function getUserFromRequest(req: NextApiRequest) {
  const token = req.cookies.token

  if (token) {
    try {
      const verified = verifyJwt<CtxUser>(token)
      return verified
    } catch (e) {
      return null
    }
  }

  return null
}

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}) {
  const user = getUserFromRequest(req)

  return { req, res, prisma, user }
}

export function createRouter() {
  return router<Context>().transformer(superjson)
}

export type Context = ReturnType<typeof createContext>