import { Chat, ChatSession } from '@prisma/client'
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

const comparator = (e: string[]) => {
  return e.sort(function (a, b) {
    return ('' + a).localeCompare(b);
  })
}

export const createOrUpdate = async ({ to, prisma, user }): Promise<ChatSession> => {
  let session = await prisma.chatSession.findFirst({
    where: {
      participantsIds: {
        hasEvery: comparator([user.id, to]),
      }
    },
  })

  console.log(`from: ${user.id} to: ${to}`)

  if (!session) {
    console.log('create triggered')

    session = await prisma.chatSession.create({
      data: {
        participantsIds: comparator([user.id, to]),

      },
    })
  }

  return session;
}

export const ChatMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nullable.field('createNewSession', {
      type: 'ChatSession',
      authorize: (_, __, { can }) => can('SEND_CHAT'),
      args: {
        to: nonNull(stringArg()),
      },

      resolve: async (_, { to }, { prisma, user }) => {


        return createOrUpdate({ to, prisma, user })
      },
    })

    t.nullable.field('sendChat', {
      type: 'Chat',
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

        const target = await createOrUpdate({ to, prisma, user })

        const pc = await prisma.chat.create({
          data: {
            chatSessionId: target.id,
            fromId: user.id,
            content: contentU ?? content,
            contentType: type,
          },
        })



        await prisma.chatSession.update({
          where: { id: target.id },
          data: { updatedAt: new Date() },
        })

        for (const p of target.participantsIds) {
          if (p !== user.id) {
            publish(
              'PRIVATE_CHAT_CREATED_' + p,
              await prisma.chat.findUnique({
                where: { id: pc.id },
                include: { from: true },
              }),
            )
          }
        }

        return pc
      },
    })
  },
})

export const ChatQuery = extendType({
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
    t.field('chatSubscribe', {
      type: 'Chat',
      authorize: (_, __, { can }) => can('LISTEN_CHAT'),
      async subscribe(_, __, { user, ...rest }) {
        return pubsub.asyncIterator<Chat>([
          'PRIVATE_CHAT_CREATED_' + user.id,
        ])
      },

      resolve(eventData) {
        return eventData
      },
    })
  },
})
