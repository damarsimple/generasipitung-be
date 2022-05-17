import { mutationField, nonNull } from 'nexus'

export const ClassroomStudentUpdateOneMutation = mutationField(
  'updateOneClassroomStudent',
  {
    type: nonNull('ClassroomStudent'),
    args: {
      data: nonNull('ClassroomStudentUpdateInput'),
      where: nonNull('ClassroomStudentWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.classroomStudent.update({
        where,
        data,
        ...select,
      })
    },
  },
)
