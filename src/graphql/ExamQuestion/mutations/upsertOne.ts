import { mutationField, nonNull } from 'nexus'

export const ExamQuestionUpsertOneMutation = mutationField(
  'upsertOneExamQuestion',
  {
    type: nonNull('ExamQuestion'),
    args: {
      where: nonNull('ExamQuestionWhereUniqueInput'),
      create: nonNull('ExamQuestionCreateInput'),
      update: nonNull('ExamQuestionUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.examQuestion.upsert({
        ...args,
        ...select,
      })
    },
  },
)
