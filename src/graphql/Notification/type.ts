import { objectType } from 'nexus'

export const Notification = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Notification',
  definition(t) {
    t.string('id')
    t.nullable.string('picturePath')
    t.string('title')
    t.string('message')
    t.boolean('isRead')
    t.nullable.string('followUpContext')
    t.nullable.string('followUpData')
    t.string('userId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
