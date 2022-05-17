import { queryField, list } from 'nexus'

export const ExamFindFirstQuery = queryField('findFirstExam', {
  type: 'Exam',
  args: {
    where: 'ExamWhereInput',
    orderBy: list('ExamOrderByWithRelationInput'),
    cursor: 'ExamWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExamScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exam.findFirst({
      ...args,
      ...select,
    })
  },
})
