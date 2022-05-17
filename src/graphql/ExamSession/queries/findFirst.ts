import { queryField, list } from 'nexus'

export const ExamSessionFindFirstQuery = queryField('findFirstExamSession', {
  type: 'ExamSession',
  args: {
    where: 'ExamSessionWhereInput',
    orderBy: list('ExamSessionOrderByWithRelationInput'),
    cursor: 'ExamSessionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExamSessionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.examSession.findFirst({
      ...args,
      ...select,
    })
  },
})
