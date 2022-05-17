import { mutationField, nonNull } from 'nexus'

export const ExamAnswerUpsertOneMutation = mutationField(
  'upsertOneExamAnswer',
  {
    type: nonNull('ExamAnswer'),
    args: {
      where: nonNull('ExamAnswerWhereUniqueInput'),
      create: nonNull('ExamAnswerCreateInput'),
      update: nonNull('ExamAnswerUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.examAnswer.upsert({
        ...args,
        ...select,
      })
    },
  },
)
