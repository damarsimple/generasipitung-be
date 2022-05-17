import { mutationField, nonNull } from 'nexus'

export const ClassroomUpdateOneMutation = mutationField('updateOneClassroom', {
  type: nonNull('Classroom'),
  args: {
    data: nonNull('ClassroomUpdateInput'),
    where: nonNull('ClassroomWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.classroom.update({
      where,
      data,
      ...select,
    })
  },
})
