import { objectType } from 'nexus'

export const PrivateChatSession = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'PrivateChatSession',
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
    t.nullable.field('lastReadAt', { type: 'DateTime' })
    t.nullable.string('lastChatId')
    t.nullable.field('lastChat', {
      type: 'PrivateChat',
      resolve(root: any) {
        return root.lastChat
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
