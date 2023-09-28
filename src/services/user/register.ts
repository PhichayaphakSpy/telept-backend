import prisma from "../../configs/db";
import { IRegisterUserPayload } from "../../interfaces/user";
import bcrypt from "bcrypt";

const register = async (payload: IRegisterUserPayload) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(payload.password, salt);

  await prisma.user.create({
    data: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      password: hashedPassword,
      birthDate: payload.birthDate,
      hospitalNo: payload.hospitalNo,
      sex: payload.sex,
      weight: payload.weight,
      height: payload.height,
    },
  });
};

export default register;
