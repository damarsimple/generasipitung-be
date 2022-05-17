import { mutationField, nonNull } from 'nexus'

export const ClassroomStudentDeleteOneMutation = mutationField(
  'deleteOneClassroomStudent',
  {
    type: 'ClassroomStudent',
    args: {
      where: nonNull('ClassroomStudentWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.classroomStudent.delete({
        where,
        ...select,
      })
    },
  },
)
