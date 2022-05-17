import { objectType } from 'nexus'

export const ExamSession = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ExamSession',
  definition(t) {
    t.string('id')
    t.string('name')
    t.nullable.field('openAt', { type: 'DateTime' })
    t.nullable.field('closeAt', { type: 'DateTime' })
    t.nullable.int('maxPlayer')
    t.nullable.string('password')
    t.string('userId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
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
      type: 'ExamSessionCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
