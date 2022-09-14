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

interface CtxOwner {
  id: string
  email: string
  username: string
  iat: string
  exp: string
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

function getOwnerFromRequest(req: NextApiRequest) {
  const token = req.cookies.token
  if (token) {
    try {
      const verified = verifyJwt<CtxOwner>(token)
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

  const owner = getOwnerFromRequest(req)

  return { req, res, prisma, user, owner }
}

export function createRouter() {
  return router<Context>().transformer(superjson)
}

export type Context = ReturnType<typeof createContext>