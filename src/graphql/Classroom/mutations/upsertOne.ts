import { mutationField, nonNull } from 'nexus'

export const ClassroomUpsertOneMutation = mutationField('upsertOneClassroom', {
  type: nonNull('Classroom'),
  args: {
    where: nonNull('ClassroomWhereUniqueInput'),
    create: nonNull('ClassroomCreateInput'),
    update: nonNull('ClassroomUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.classroom.upsert({
      ...args,
      ...select,
    })
  },
})
