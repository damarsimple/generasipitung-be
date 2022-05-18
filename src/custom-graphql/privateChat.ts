import { PrivateChat } from '@prisma/client'
import {
  arg,
  extendType,
  intArg,
  nonNull,
  stringArg,
  subscriptionType,
} from 'nexus'
import { storeFile } from '../../modules/filesystem'
import { pubsub, publish } from '../../modules/pubsub'

export const PrivateChatMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nullable.field('createNewSession', {
      type: 'PrivateChatSession',
      authorize: (_, __, { can }) => can('SEND_CHAT'),
      args: {
        to: nonNull(stringArg()),
      },

      resolve: async (_, { to }, { prisma, user }) => {
        console.log(to)
        console.log(user.id)

        let session = await prisma.privateChatSession.findFirst({
          where: {
            toId: to,
            fromId: user.id,
          },
        })

        if (!session) {
          console.log('create triggered')

          session = await prisma.privateChatSession.create({
            data: {
              toId: to,
              fromId: user.id,
            },
          })
        }

        return session
      },
    })

    t.nullable.field('sendChat', {
      type: 'PrivateChat',
      authorize: (_, __, { can }) => can('SEND_CHAT'),
      args: {
        to: nonNull(stringArg()),
        content: nonNull(stringArg()),
        type: nonNull(arg({ type: 'ContentType' })),
        file: arg({ type: 'Upload' }),
      },
      resolve: async (_, { file, to, content, type }, { user, prisma }) => {
        let contentU

        if (file) {
          contentU = await storeFile(file)
        }

        const pc = await prisma.privateChat.create({
          data: {
            toId: to,
            fromId: user.id,
            content: contentU ?? content,
            contentType: type,
          },
        })

        let session = await prisma.privateChatSession.findFirst({
          where: {
            toId: to,
            fromId: user.id,
          },
        })

        if (!session) {
          session = await prisma.privateChatSession.create({
            data: {
              toId: to,
              fromId: user.id,
              lastChatId: pc.id,
            },
          })
        }

        await prisma.privateChatSession.update({
          where: { id: session.id },
          data: { updatedAt: new Date() },
        })

        publish(
          'PRIVATE_CHAT_CREATED_' + pc.toId,
          await prisma.privateChat.findUnique({
            where: { id: pc.id },
            include: { from: true, to: true },
          }),
        )

        return pc
      },
    })
  },
})

export const PrivateChatQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('findChatTarget', {
      type: 'User',
      authorize: (_, __, { can }) => can('SEND_CHAT'),
      args: {
        name: nonNull(stringArg()),
        take: intArg({ default: 10 }),
      },

      resolve: async (_, { name, take }, { prisma, user }) => {
        return await prisma.user.findMany({
          take,

          where: {
            name: {
              contains: name,
            },
          },
        })
      },
    })
  },
})

export const subscriptions = subscriptionType({
  definition(t) {
    t.field('privateChatSubscribe', {
      type: 'PrivateChat',
      authorize: (_, __, { can }) => can('LISTEN_CHAT'),
      async subscribe(_, __, { user, ...rest }) {
        return pubsub.asyncIterator<PrivateChat>([
          'PRIVATE_CHAT_CREATED_' + user.id,
        ])
      },

      resolve(eventData) {
        return eventData
      },
    })
  },
})
