import { queryField, list } from 'nexus'

export const ClassroomStudentAggregateQuery = queryField(
  'aggregateClassroomStudent',
  {
    type: 'AggregateClassroomStudent',
    args: {
      where: 'ClassroomStudentWhereInput',
      orderBy: list('ClassroomStudentOrderByWithRelationInput'),
      cursor: 'ClassroomStudentWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.classroomStudent.aggregate({ ...args, ...select }) as any
    },
  },
)
