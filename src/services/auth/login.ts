import prisma from "../../configs/db";
import jwt from "jsonwebtoken";

const login = async (nationalId: string, password: string) => {
  try {
    const jwtSecret = process.env.JWT_SECRET || "";
    const query = await prisma.user.findUnique({
      where: {
        nationalId: nationalId,
      },
      select: {
        userId: true,
        firstName: true,
        lastName: true,
        nationalId: true,
        birthDate: true,
        role: true,
      },
    });

    if (!query) {
      throw new Error("User not found");
    } else {
      const date = query?.birthDate.toISOString() || "0000-00-00";
      const formattedDate =
        date.substring(8, 10) + date.substring(5, 7) + date.substring(0, 4);

      const jwtPayload = {
        userId: query?.userId || "",
        firstName: query?.firstName || "",
        lastName: query?.lastName || "",
        role: query?.role || "USER",
      };

      if (password.includes(formattedDate)) {
        const token = jwt.sign(jwtPayload, jwtSecret, { expiresIn: "24h" });
        return token;
      }
    }
  } catch (err) {
    throw err;
  }
};

export default login;
