export interface IRegisterPayload {
  firstName: string;
  lastName: string;
  nationalId: string;
  birthDate: string;
  sex: Sex;
}

export interface IRegisterUserPayload extends IRegisterPayload {
  weight: number;
  height: number;
}

export type IRegisterDoctorPayload = IRegisterPayload;

export type IRegisterTherapistPayload = IRegisterPayload;

export enum Sex {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

export enum Role {
  USER = "USER",
  DOCTOR = "DOCTOR",
  THERAPIST = "THERAPIST",
}

export interface IStat {
  accuracy: number;
  consistency: number;
}
