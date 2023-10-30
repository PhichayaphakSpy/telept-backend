import prisma from "../../configs/db";

const getPoseById = (poseId: number) => {
  const result = prisma.pose.findFirst({
    where: {
      id: poseId,
    },
  });

  return result;
};

export default getPoseById;
