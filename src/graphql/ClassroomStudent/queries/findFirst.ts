import { queryField, list } from 'nexus'

export const ClassroomStudentFindFirstQuery = queryField(
  'findFirstClassroomStudent',
  {
    type: 'ClassroomStudent',
    args: {
      where: 'ClassroomStudentWhereInput',
      orderBy: list('ClassroomStudentOrderByWithRelationInput'),
      cursor: 'ClassroomStudentWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ClassroomStudentScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.classroomStudent.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
