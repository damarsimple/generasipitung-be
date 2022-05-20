import { VerifyType } from '@prisma/client'
import { getConfig } from '../../modules/config'
import { objectType, extendType, nonNull, stringArg, arg } from 'nexus'
import { sendMail } from '../../modules/mailer'
import UUID from 'uuidjs'

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
    t.boolean('status')
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

        return {
          status: true,
          message: 'Kode Verifikasi valid',
        }
      },
    })
    t.field('resendVerification', {
      type: VerificationResponse,
      authorize: (_, __, { can }) => can('SEND_CHAT'),
      args: {
        type: nonNull(arg({ type: 'VerifyType' })),
      },
      rateLimit: () => ({ max: 5, window: '5m' }),
      resolve: async (_, { key, type }, { prisma, user }) => {
        const where = { id: user.id }

        const userA = await prisma.user.update({
          where,
          data: {
            verifyType: type,
            verifykey: UUID.generate(),
          },
        })

        if (!userA) {
          return {
            status: false,
            message: 'user tidak valid',
          }
        }
        try {
          await sendMail(
            {
              to: [
                {
                  name: userA.name,
                  address: userA.email,
                },
              ],
              subject: 'Verifikasi Email',
              html: `Klik link disini untuk memverifikasi email <strong>${
                getConfig('CONFIRM_MAIL_CLAIM') + userA.verifykey
              }</strong>`,
              text: `Klik link disini untuk memverifikasi email <strong>${
                getConfig('CONFIRM_MAIL_CLAIM') + userA.verifykey
              }</strong>`,
            },
            'VERIFICATOR',
          )
        } catch (error) {
          return {
            status: false,
            message: 'gagal kirim ulang verifikasi',
          }
        }

        return {
          status: true,
          message: 'berhasil kirim ulang verifikasi',
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
        schoolId: stringArg(),
      },
      rateLimit: () => ({ max: 30, window: '5m' }),
      resolve: async (_, { schoolId, password, ...rest }, ctx) => {
        try {
          const user = await ctx.prisma.user.create({
            data: {
              ...rest,
              password: await ctx.provider.hash.hash(password),
            },
          })

          if (rest.role == 'TEACHER') {
            await ctx.prisma.schoolStaff.create({
              data: {
                userId: user.id,
                schoolId,
                roles: ['TEACHER'],
              },
            })
          }

          delete user.password

          const token = await ctx.provider.token.create(user)

          try {
            await sendMail(
              {
                to: [
                  {
                    name: user.name,
                    address: user.email,
                  },
                ],
                subject: 'Verifikasi Email',
                html: `Klik link disini untuk memverifikasi email <strong>${
                  getConfig('CONFIRM_MAIL_CLAIM') + user.verifykey
                }</strong>`,
                text: `Klik link disini untuk memverifikasi email <strong>${
                  getConfig('CONFIRM_MAIL_CLAIM') + user.verifykey
                }</strong>`,
              },
              'VERIFICATOR',
            )
          } catch (error) {
            console.log(`Error sending mail: ${error}`)
          }

          return {
            success: true,
            message: 'User berhasil dibuat',
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
            message: `${email} sudah terdaftar`,
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
            message: 'Email tidak terdaftar',
          }
        }

        const isValid = await ctx.provider.hash.verify(user.password, password)

        if (!isValid) {
          return {
            success: false,
            message: 'Password salah',
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
