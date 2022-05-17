import { mutationField, nonNull } from 'nexus'

export const ClassroomStudentUpdateManyMutation = mutationField(
  'updateManyClassroomStudent',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ClassroomStudentUpdateManyMutationInput'),
      where: 'ClassroomStudentWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.classroomStudent.updateMany(args as any)
    },
  },
)
