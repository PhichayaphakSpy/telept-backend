import bcrypt from "bcrypt";
import prisma from "../../configs/db";
import jwt from "jsonwebtoken";

const login = async (email: string, password: string) => {
  try {
    const jwtSecret = process.env.JWT_SECRET || "";
    const query = await prisma.user.findFirst({
      where: {
        email: email,
      },
      select: {
        userId: true,
        firstName: true,
        lastName: true,
        role: true,
        password: true,
      },
    });

    const isMatch = await bcrypt.compare(password, query?.password || "");

    const jwtPayload = {
      userId: query?.userId || "",
      firstName: query?.firstName || "",
      lastName: query?.lastName || "",
      role: query?.role || "USER",
    };

    if (isMatch) {
      const token = jwt.sign(jwtPayload, jwtSecret, { expiresIn: "24h" });
      return token;
    }
  } catch (err) {
    throw err;
  }
};

export default login
