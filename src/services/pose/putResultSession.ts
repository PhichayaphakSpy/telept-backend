import { Prisma, PrismaPromise } from "@prisma/client";
import { IAutoResultPayload } from "../../interfaces/pose";
import prisma from "../../configs/db";

const putResultSession = async (payload: IAutoResultPayload) => {
  const today = new Date();
  const yesterday = new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000);

  try {
    const existSession = await prisma.session.findMany({
      where: {
        poseId: payload.poseId,
        taskId: payload.taskId,
        session: payload.session,
        create_at: {
          gte: yesterday,
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
          videoNormal: payload.videoNormal,
          videoBone: payload.videoBone,
        },
      });
    } else {
      await prisma.session.create({
        data: {
          taskId: payload.taskId,
          session: payload.session,
          poseId: payload.poseId,
          score: payload.score,
          videoNormal: payload.videoNormal,
          videoBone: payload.videoBone,
          create_at: today,
        },
      });
    }
  } catch (err) {
    throw err;
  }
};

export default putResultSession;
