import prisma from "../../configs/db";

const getPose = () => {
  const result = prisma.pose.findMany();

  return result;
};

export default getPose;
