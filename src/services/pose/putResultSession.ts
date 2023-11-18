import { Prisma, PrismaPromise } from "@prisma/client";
import { IAutoResultPayload } from "../../interfaces/pose";
import prisma from "../../configs/db";

const putResultSession = async (payload: IAutoResultPayload) => {
  const today = new Date();
  const threeHoursAgo = new Date(today.getTime() - 3 * 60 * 60 * 1000);

  try {
    const existSession = await prisma.session.findMany({
      where: {
        poseId: payload.poseId,
        taskId: payload.taskId,
        create_at: {
          gte: threeHoursAgo,
          lte: today,
        },
      },
    });

    if (existSession.length > 0) {
      await prisma.session.update({
        where: {
          id: existSession[0].id,
        },
        data: {
          score: payload.score,
        },
      });
    } else {
      await prisma.session.create({
        data: {
          taskId: payload.taskId,
          poseId: payload.poseId,
          score: payload.score,
          create_at: today,
        },
      });
    }
  } catch (err) {
    throw err;
  }
};

export default putResultSession;
