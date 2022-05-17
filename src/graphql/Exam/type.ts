import { objectType } from 'nexus'

export const Exam = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Exam',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('userId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('examquestions', {
      type: 'ExamQuestion',
      args: {
        where: 'ExamQuestionWhereInput',
        orderBy: 'ExamQuestionOrderByWithRelationInput',
        cursor: 'ExamQuestionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ExamQuestionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.examquestions
      },
    })
    t.list.field('examAnswers', {
      type: 'ExamAnswer',
      args: {
        where: 'ExamAnswerWhereInput',
        orderBy: 'ExamAnswerOrderByWithRelationInput',
        cursor: 'ExamAnswerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ExamAnswerScalarFieldEnum',
      },
      resolve(root: any) {
        return root.examAnswers
      },
    })
    t.field('_count', {
      type: 'ExamCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
