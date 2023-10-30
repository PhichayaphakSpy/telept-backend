import prisma from "../../configs/db";

const postResultSession = async (
  taskId: number,
  poseId: number,
  score: number
) => {
  const today = new Date();
  try {
    await prisma.session.create({
      data: {
        taskId: taskId,
        poseId: poseId,
        score: score,
        create_at: today,
      },
    });
  } catch (err) {
    throw err;
  }
};

export default postResultSession;
