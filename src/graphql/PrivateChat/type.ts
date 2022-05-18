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
  },
})
