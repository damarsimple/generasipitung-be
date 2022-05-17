import { queryField, nonNull } from 'nexus'

export const ClassroomStudentFindUniqueQuery = queryField(
  'findUniqueClassroomStudent',
  {
    type: 'ClassroomStudent',
    args: {
      where: nonNull('ClassroomStudentWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.classroomStudent.findUnique({
        where,
        ...select,
      })
    },
  },
)
