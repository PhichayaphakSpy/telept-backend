import prisma from "../../configs/db";

const gradePatientById = async (payload: any) => {
  const { date, taskId, poses } = payload;

  for (const pose of poses) {
    await prisma.doctorGraded.create({
      data: {
        date: new Date(date),
        taskId: taskId,
        poseId: pose.poseId,
        overAll: pose.overAll,
        angle: pose.angle,
        time: pose.time,
        comment: pose.comment,
      },
    });
  }
};

export default gradePatientById;
