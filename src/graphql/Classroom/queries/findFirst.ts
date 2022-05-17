import { queryField, list } from 'nexus'

export const ClassroomFindFirstQuery = queryField('findFirstClassroom', {
  type: 'Classroom',
  args: {
    where: 'ClassroomWhereInput',
    orderBy: list('ClassroomOrderByWithRelationInput'),
    cursor: 'ClassroomWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ClassroomScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.classroom.findFirst({
      ...args,
      ...select,
    })
  },
})
