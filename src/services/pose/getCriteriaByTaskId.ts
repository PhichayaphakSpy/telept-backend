import prisma from "../../configs/db";

const getCriteriaByTaskId = (taskId: number) => {
  const criteria = prisma.task.findFirst({
    where: {
      id: taskId,
    },
    select: {
      Criteria: true,
    },
  });

  return criteria;
};

export default getCriteriaByTaskId;
