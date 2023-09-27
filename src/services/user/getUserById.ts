import prisma from "../../configs/db";

const getUserById = (userId: number) => {
  const result = prisma.user.findFirst({
    where: {
      userId: userId,
    },
  });

  return result;
};

export default getUserById;
