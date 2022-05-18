import { PrismaClient, User } from '@prisma/client'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { getConfig } from '../modules/config'
import { ExpressContext } from 'apollo-server-express'
import { Request } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import { Maybe } from 'nexus/dist/core'
const prisma = new PrismaClient()

export const provider = {
  hash: {
    hash: async (original) => {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(original, salt)

      return hash
    },
    verify: async (hash, plain) => {
      const isValid = await bcrypt.compare(plain, hash)

      return isValid
    },
  },

  token: {
    create: async (data) => {
      return await jwt.sign(data, getConfig('JWT_SECRET'), { expiresIn: '1d' })
    },

    parse: async (data) => {
      return await jwt.decode(data)
    },
  },
}

export const authParser = async (
  e: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
) => {
  if (!e || !e.headers['authorization']) return

  const token = e.headers['authorization'].split(' ')[1]

  const data = (await provider.token.parse(token)) as Partial<User> | null

  if (!data) return

  const user = await prisma.user.findUnique({
    where: {
      id: data.id,
    },
  })

  return user
}

// type PERMISSION = "SEND_CHAT";
type PERMISSION = any

export interface Context {
  prisma: PrismaClient
  select: any
  user?: any
  provider: typeof provider
  ip?: string
  can: (e: PERMISSION) => Promise<boolean>
}

export async function createContext({ req }: ExpressContext): Promise<Context> {
  const user = await authParser(req)

  if (user) {
    console.log(`User ${user.name} logged in.`)
  }

  const ip: Maybe<string> = (req.headers['x-forwarded-for'] ||
    req?.socket?.remoteAddress) as string

  return {
    user,
    prisma,
    select: {},
    provider,
    ip,
    async can(e) {
      if (!user) return false

      return true
    },
  }
}
