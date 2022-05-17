import { objectType } from 'nexus'

export const ExamAnswer = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ExamAnswer',
  definition(t) {
    t.string('id')
    t.string('examId')
    t.field('exam', {
      type: 'Exam',
      resolve(root: any) {
        return root.exam
      },
    })
    t.float('grade')
    t.boolean('finishCalculation')
    t.nullable.string('examSessionId')
    t.nullable.field('examSession', {
      type: 'ExamSession',
      resolve(root: any) {
        return root.examSession
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
