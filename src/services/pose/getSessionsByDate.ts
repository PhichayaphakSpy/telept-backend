import prisma from "../../configs/db";

const getSessionsByDate = async (userid: number) => {
  const today = new Date();
  const todayTask = await prisma.task.findMany({
    where: {
      patientId: userid,
      AND: [{ start_at: { lte: today } }, { end_at: { gte: today } }],
    },
    select: {
      id: true,
      taskName: true,
      sessionsperday: true,
      start_at: true,
      end_at: true,
      patientId: true,
      doctorId: true,
      Pose: true,
      RepSec: true,
      Criteria: true,
    },
  });

  return todayTask;
};

export default getSessionsByDate;
