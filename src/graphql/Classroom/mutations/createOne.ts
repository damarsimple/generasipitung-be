import { mutationField, nonNull } from 'nexus'

export const ClassroomCreateOneMutation = mutationField('createOneClassroom', {
  type: nonNull('Classroom'),
  args: {
    data: nonNull('ClassroomCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.classroom.create({
      data,
      ...select,
    })
  },
})
