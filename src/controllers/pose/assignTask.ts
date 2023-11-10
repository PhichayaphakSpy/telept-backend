import { Request, Response } from "express";
import assignTaskToPatient from "../../services/pose/assignTaskToPatient";

const assignTask = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await assignTaskToPatient(payload);

    res.status(200).json({ result: "created", task: result });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default assignTask;
