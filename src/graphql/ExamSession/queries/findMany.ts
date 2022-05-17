import { queryField, nonNull, list } from 'nexus'

export const ExamSessionFindManyQuery = queryField('findManyExamSession', {
  type: nonNull(list(nonNull('ExamSession'))),
  args: {
    where: 'ExamSessionWhereInput',
    orderBy: list('ExamSessionOrderByWithRelationInput'),
    cursor: 'ExamSessionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExamSessionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.examSession.findMany({
      ...args,
      ...select,
    })
  },
})
