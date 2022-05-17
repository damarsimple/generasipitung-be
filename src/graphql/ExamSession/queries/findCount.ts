import { queryField, nonNull, list } from 'nexus'

export const ExamSessionFindCountQuery = queryField(
  'findManyExamSessionCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ExamSessionWhereInput',
      orderBy: list('ExamSessionOrderByWithRelationInput'),
      cursor: 'ExamSessionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('ExamSessionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.examSession.count(args as any)
    },
  },
)
