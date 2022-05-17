import { mutationField, nonNull } from 'nexus'

export const ExamSessionUpsertOneMutation = mutationField(
  'upsertOneExamSession',
  {
    type: nonNull('ExamSession'),
    args: {
      where: nonNull('ExamSessionWhereUniqueInput'),
      create: nonNull('ExamSessionCreateInput'),
      update: nonNull('ExamSessionUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.examSession.upsert({
        ...args,
        ...select,
      })
    },
  },
)
