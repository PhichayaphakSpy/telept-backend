import prisma from "../../configs/db"
import { IRegisterUserPayload } from "../../interfaces/user"

const register = async (payload: IRegisterUserPayload) => {
    await prisma.user.create({
        data: {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: payload.password,
            birthDate: payload.birthDate,
            hospitalNo: payload.hospitalNo,
            sex: payload.sex,
            weight: payload.weight,
            height: payload.height,
        }
    })
}

export default register