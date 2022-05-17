import { objectType } from 'nexus'

export const ClassroomStudent = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ClassroomStudent',
  definition(t) {
    t.string('id')
    t.string('userId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.nullable.field('classroom', {
      type: 'Classroom',
      resolve(root: any) {
        return root.classroom
      },
    })
    t.nullable.string('classroomId')
    t.field('status', { type: 'ClassroomStudentStatus' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
