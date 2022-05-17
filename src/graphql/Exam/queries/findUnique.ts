import { queryField, nonNull } from 'nexus'

export const ExamFindUniqueQuery = queryField('findUniqueExam', {
  type: 'Exam',
  args: {
    where: nonNull('ExamWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.exam.findUnique({
      where,
      ...select,
    })
  },
})
