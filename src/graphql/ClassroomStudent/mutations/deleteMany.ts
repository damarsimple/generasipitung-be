import { mutationField, nonNull } from 'nexus'

export const ClassroomStudentDeleteManyMutation = mutationField(
  'deleteManyClassroomStudent',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ClassroomStudentWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.classroomStudent.deleteMany({ where } as any)
    },
  },
)
