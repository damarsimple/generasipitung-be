import { objectType } from 'nexus'

export const Classroom = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Classroom',
  definition(t) {
    t.string('id')
    t.string('name')
    t.nullable.string('schoolId')
    t.nullable.field('school', {
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
    t.list.field('students', {
      type: 'ClassroomStudent',
      args: {
        where: 'ClassroomStudentWhereInput',
        orderBy: 'ClassroomStudentOrderByWithRelationInput',
        cursor: 'ClassroomStudentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ClassroomStudentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.students
      },
    })
    t.int('level')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('_count', {
      type: 'ClassroomCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
