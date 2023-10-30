import prisma from "../../configs/db";
import { IRegisterUserPayload } from "../../interfaces/user";

const register = async (payload: IRegisterUserPayload) => {
  await prisma.user.create({
    data: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      nationalId: payload.nationalId,
      birthDate: payload.birthDate,
      sex: payload.sex,
      weight: payload.weight,
      height: payload.height,
    },
  });
};

export default register;
