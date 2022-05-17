import { queryField, nonNull, list } from 'nexus'

export const ClassroomFindManyQuery = queryField('findManyClassroom', {
  type: nonNull(list(nonNull('Classroom'))),
  args: {
    where: 'ClassroomWhereInput',
    orderBy: list('ClassroomOrderByWithRelationInput'),
    cursor: 'ClassroomWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ClassroomScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.classroom.findMany({
      ...args,
      ...select,
    })
  },
})
