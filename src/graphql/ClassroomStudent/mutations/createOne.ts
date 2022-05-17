import { mutationField, nonNull } from 'nexus'

export const ClassroomStudentCreateOneMutation = mutationField(
  'createOneClassroomStudent',
  {
    type: nonNull('ClassroomStudent'),
    args: {
      data: nonNull('ClassroomStudentCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.classroomStudent.create({
        data,
        ...select,
      })
    },
  },
)
