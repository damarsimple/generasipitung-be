import { VerifyType } from '@prisma/client'
import { getConfig } from '../../modules/config'
import { objectType, extendType, nonNull, stringArg, arg } from 'nexus'
import { sendMail } from '../../modules/mailer'

export const Auth = objectType({
  name: 'Auth',
  definition(t) {
    t.nullable.string('token', {
      description: 'JWT token',
    })

    t.boolean('success')
    t.nullable.string('message')

    t.nullable.field('user', { type: 'User' })
  },
})

export const AuthQuery = extendType({
  type: 'Query',

  definition(t) {
    t.nullable.field('me', {
      type: 'User',
      resolve: (_, __, { user, prisma }) =>
        !user ? undefined : prisma.user.findUnique({ where: { id: user?.id } }),
    })
  },
})

export const VerificationResponse = objectType({
  name: 'VerificationResponse',
  definition(t) {
    t.boolean('success')
    t.nullable.string('message')
  },
})

export const AuthMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('confirmVerification', {
      type: VerificationResponse,

      args: {
        type: nonNull(arg({ type: 'VerifyType' })),
        key: nonNull(stringArg()),
      },
      resolve: async (_, { key, type }, { prisma }) => {
        const where = {
          verifykey: key,
          verifyType: type,
        }

        const user = await prisma.user.findFirst({
          where,
        })

        if (!user) {
          return {
            status: 'false',
            message: 'Kode Verifikasi invalid',
          }
        }

        switch (type) {
          case VerifyType.EMAIL:
            await prisma.user.updateMany({
              where,
              data: {
                emailVerifiedAt: new Date(),
              },
            })

            break
          case VerifyType.PHONE:
            await prisma.user.updateMany({
              where,
              data: {
                phoneNumberVerifiedAt: new Date(),
              },
            })

            break

          case VerifyType.IDENTITY:
            await prisma.user.updateMany({
              where,
              data: {
                identityNumberVerifiedAt: new Date(),
              },
            })

            break
          default:
            break
        }
      },
    })

    t.field('register', {
      type: Auth,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        name: nonNull(stringArg()),
        phoneNumber: nonNull(stringArg()),
        address: stringArg(),
        provinceId: nonNull(stringArg()),
        regencyId: nonNull(stringArg()),
        role: nonNull(arg({ type: 'Roles' })),

        nrg: stringArg(),
        nisn: stringArg(),
      },
      rateLimit: () => ({ max: 30, window: '5m' }),
      resolve: async (_, { password, ...rest }, ctx) => {
        try {
          const user = await ctx.prisma.user.create({
            data: {
              ...rest,
              password: await ctx.provider.hash.hash(password),
            },
          })

          delete user.password

          const token = await ctx.provider.token.create(user)

          await sendMail({
            to: [user.email],
            subject: 'Verifikasi Email',
            html_body: `Klik link disini untuk memverifikasi email <strong>${
              getConfig('CONFIRM_MAIL_CLAIM') + user.verifykey
            }</strong>`,
          })

          return {
            success: true,
            message: 'User created',
            user,
            token,
          }
        } catch (error) {
          return {
            success: false,
            message: error.message,
          }
        }
      },
    })

    t.field('validate', {
      type: Auth,
      args: {
        email: nonNull(stringArg()),
      },
      rateLimit: () => ({ max: 300, window: '5m' }),
      resolve: async (_, { email }, ctx) => {
        const user = await ctx.prisma.user.findFirst({
          where: {
            email,
          },
        })
        if (user) {
          return {
            success: false,
            message: 'User exists',
          }
        }

        return {
          success: true,
        }
      },
    })

    t.field('login', {
      type: Auth,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      rateLimit: () => ({ max: 30, window: '5m' }),
      resolve: async (_, { email, password }, ctx) => {
        const user = await ctx.prisma.user.findFirst({
          where: {
            email,
          },
        })

        if (!user) {
          return {
            success: false,
            message: 'User not found',
          }
        }

        const isValid = await ctx.provider.hash.verify(user.password, password)

        if (!isValid) {
          return {
            success: false,
            message: 'Invalid password',
          }
        }
        delete user.password

        const token = await ctx.provider.token.create(user)

        return {
          success: true,
          token: token,
          user,
        }
      },
    })
  },
})
