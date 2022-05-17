import { queryField, nonNull, list } from 'nexus'

export const ClassroomStudentFindCountQuery = queryField(
  'findManyClassroomStudentCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ClassroomStudentWhereInput',
      orderBy: list('ClassroomStudentOrderByWithRelationInput'),
      cursor: 'ClassroomStudentWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ClassroomStudentScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.classroomStudent.count(args as any)
    },
  },
)
