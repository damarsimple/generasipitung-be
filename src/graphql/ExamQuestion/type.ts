import { objectType } from 'nexus'

export const ExamQuestion = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ExamQuestion',
  definition(t) {
    t.string('id')
    t.string('questionId')
    t.field('question', {
      type: 'Question',
      resolve(root: any) {
        return root.question
      },
    })
    t.string('examId')
    t.field('exam', {
      type: 'Exam',
      resolve(root: any) {
        return root.exam
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
