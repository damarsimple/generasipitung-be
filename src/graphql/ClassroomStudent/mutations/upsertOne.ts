import { mutationField, nonNull } from 'nexus'

export const ClassroomStudentUpsertOneMutation = mutationField(
  'upsertOneClassroomStudent',
  {
    type: nonNull('ClassroomStudent'),
    args: {
      where: nonNull('ClassroomStudentWhereUniqueInput'),
      create: nonNull('ClassroomStudentCreateInput'),
      update: nonNull('ClassroomStudentUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.classroomStudent.upsert({
        ...args,
        ...select,
      })
    },
  },
)
