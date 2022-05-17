import { mutationField, nonNull } from 'nexus'

export const ClassroomDeleteOneMutation = mutationField('deleteOneClassroom', {
  type: 'Classroom',
  args: {
    where: nonNull('ClassroomWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.classroom.delete({
      where,
      ...select,
    })
  },
})
