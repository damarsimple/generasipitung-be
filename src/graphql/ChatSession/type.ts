import { objectType } from 'nexus'

export const ChatSession = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ChatSession',
  definition(t) {
    t.string('id')
    t.list.string('participantsIds')
    t.nullable.field('lastReadAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('chats', {
      type: 'Chat',
      args: {
        where: 'ChatWhereInput',
        orderBy: 'ChatOrderByWithRelationInput',
        cursor: 'ChatWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ChatScalarFieldEnum',
      },
      resolve(root: any) {
        return root.chats
      },
    })
    t.field('_count', {
      type: 'ChatSessionCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
