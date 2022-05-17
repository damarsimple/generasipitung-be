import { queryField, nonNull, list } from 'nexus'

export const ClassroomFindCountQuery = queryField('findManyClassroomCount', {
  type: nonNull('Int'),
  args: {
    where: 'ClassroomWhereInput',
    orderBy: list('ClassroomOrderByWithRelationInput'),
    cursor: 'ClassroomWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ClassroomScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.classroom.count(args as any)
  },
})
