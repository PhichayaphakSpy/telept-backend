import prisma from "../../configs/db";
import { IAssignTaskPayload } from "../../interfaces/pose";

const assignTask = async (payload: IAssignTaskPayload) => {
  try {
    const { patientId, doctorId, poses, ...taskDetails } = payload;

    const createdTask = await prisma.task.create({
      data: {
        ...taskDetails,
        patient: { connect: { userId: patientId } },
        doctor: { connect: { userId: doctorId } },
        Pose: {
          connect: poses.map((pose) => ({ id: pose.poseId })),
        },
        RepSec: {
          create: poses.map((pose) => ({
            Pose: { connect: { id: pose.poseId } },
            repeat: pose.repeat,
            long: pose.long,
          })),
        },
      },
      include: {
        Pose: {
          include: {
            RepSec: true,
          },
        },
      },
    });

    return createdTask;
  } catch (error) {
    console.error("Error assigning task:", error);
    throw error;
  } finally {
    await prisma.$disconnect(); // Close the Prisma client
  }
};

export default assignTask;
