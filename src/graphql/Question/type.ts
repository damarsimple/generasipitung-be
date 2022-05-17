import { objectType } from 'nexus'

export const Question = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Question',
  definition(t) {
    t.string('id')
    t.string('name')
    t.field('type', { type: 'QuestionType' })
    t.field('contentType', { type: 'ContentType' })
    t.string('content')
    t.field('answerType', { type: 'ContentType' })
    t.list.string('answers')
    t.string('userId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.nullable.string('originalQuestionId')
    t.nullable.field('originalQuestion', {
      type: 'Question',
      resolve(root: any) {
        return root.originalQuestion
      },
    })
    t.list.field('childrens', {
      type: 'Question',
      args: {
        where: 'QuestionWhereInput',
        orderBy: 'QuestionOrderByWithRelationInput',
        cursor: 'QuestionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'QuestionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.childrens
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
    t.field('_count', {
      type: 'QuestionCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
