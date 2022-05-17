import { objectType } from 'nexus'

export const SchoolStaff = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'SchoolStaff',
  definition(t) {
    t.string('id')
    t.string('schoolId')
    t.field('school', {
      type: 'School',
      resolve(root: any) {
        return root.school
      },
    })
    t.string('userId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.list.field('roles', { type: 'SchoolStaffRoles' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
