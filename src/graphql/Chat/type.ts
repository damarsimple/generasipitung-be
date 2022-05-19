import { objectType } from 'nexus'

export const Chat = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Chat',
  definition(t) {
    t.string('id')
    t.string('fromId')
    t.field('from', {
      type: 'User',
      resolve(root: any) {
        return root.from
      },
    })
    t.field('contentType', { type: 'ContentType' })
    t.string('content')
    t.nullable.field('readAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.string('chatSessionId')
    t.field('chatSession', {
      type: 'ChatSession',
      resolve(root: any) {
        return root.chatSession
      },
    })
  },
})
