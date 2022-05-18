import { objectType } from 'nexus'

export const PrivateChat = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'PrivateChat',
  definition(t) {
    t.string('id')
    t.string('fromId')
    t.field('from', {
      type: 'User',
      resolve(root: any) {
        return root.from
      },
    })
    t.string('toId')
    t.field('to', {
      type: 'User',
      resolve(root: any) {
        return root.to
      },
    })
    t.field('contentType', { type: 'ContentType' })
    t.string('content')
    t.nullable.field('readAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('privateChatSession', {
      type: 'PrivateChatSession',
      args: {
        where: 'PrivateChatSessionWhereInput',
        orderBy: 'PrivateChatSessionOrderByWithRelationInput',
        cursor: 'PrivateChatSessionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PrivateChatSessionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.privateChatSession
      },
    })
    t.field('_count', {
      type: 'PrivateChatCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
