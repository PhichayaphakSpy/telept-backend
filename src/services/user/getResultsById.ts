import prisma from "../../configs/db";

const getResultsById = (userId: number) => {
  const userTask = prisma.task.findFirst({
    where: {
      patientId: userId,
    },
    select: {
      id: true,
    },
  });

  return userTask.then((task) => {
    if (task) {
      const result = prisma.session.findMany({
        where: {
          taskId: task.id,
        },
      });

      return result;
    }
    return null;
  });
};

export default getResultsById;
