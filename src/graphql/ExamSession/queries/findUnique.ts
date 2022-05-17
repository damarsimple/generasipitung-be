import { queryField, nonNull } from 'nexus'

export const ExamSessionFindUniqueQuery = queryField('findUniqueExamSession', {
  type: 'ExamSession',
  args: {
    where: nonNull('ExamSessionWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.examSession.findUnique({
      where,
      ...select,
    })
  },
})
