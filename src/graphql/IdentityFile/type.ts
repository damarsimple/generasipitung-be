import { objectType } from 'nexus'

export const IdentityFile = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'IdentityFile',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('url')
    t.field('type', { type: 'IdentityFileType' })
    t.string('number')
    t.string('userId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
  },
})
