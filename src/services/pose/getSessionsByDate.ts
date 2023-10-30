import prisma from "../../configs/db";

const getSessionsByDate = async (userid: number) => {
  const today = new Date();
  const todayTask = await prisma.task.findMany({
    where: {
      patientId: userid,
      AND: [{ start_at: { lte: today } }, { end_at: { gte: today } }],
    },
  });

  if (todayTask.length > 0) {
    const result = await prisma.session.findMany({
      where: {
        taskId: todayTask[0].id,
      },
      select: {
        id: true,
        pose: true,
      },
    });

    return result;
  } else {
    throw new Error("Task not found");
  }
};

export default getSessionsByDate;
