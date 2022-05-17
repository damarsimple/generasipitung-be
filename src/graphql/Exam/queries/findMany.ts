import { queryField, nonNull, list } from 'nexus'

export const ExamFindManyQuery = queryField('findManyExam', {
  type: nonNull(list(nonNull('Exam'))),
  args: {
    where: 'ExamWhereInput',
    orderBy: list('ExamOrderByWithRelationInput'),
    cursor: 'ExamWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExamScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exam.findMany({
      ...args,
      ...select,
    })
  },
})
