import { Request, Response } from "express";
import gradePatientById from "../../services/user/gradePatientById";

const gradePatient = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    await gradePatientById(payload);

    res.status(200).json({ result: "created" });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default gradePatient;
