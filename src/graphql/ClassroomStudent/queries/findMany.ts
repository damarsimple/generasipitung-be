import { queryField, nonNull, list } from 'nexus'

export const ClassroomStudentFindManyQuery = queryField(
  'findManyClassroomStudent',
  {
    type: nonNull(list(nonNull('ClassroomStudent'))),
    args: {
      where: 'ClassroomStudentWhereInput',
      orderBy: list('ClassroomStudentOrderByWithRelationInput'),
      cursor: 'ClassroomStudentWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ClassroomStudentScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.classroomStudent.findMany({
        ...args,
        ...select,
      })
    },
  },
)
