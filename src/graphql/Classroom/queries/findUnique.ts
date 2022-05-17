import { queryField, nonNull } from 'nexus'

export const ClassroomFindUniqueQuery = queryField('findUniqueClassroom', {
  type: 'Classroom',
  args: {
    where: nonNull('ClassroomWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.classroom.findUnique({
      where,
      ...select,
    })
  },
})
