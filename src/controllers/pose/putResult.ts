import { Request, Response } from "express";
import putResultSession from "../../services/pose/putResultSession";

const putResult = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const session = await putResultSession(payload);

    res.status(200).json({ session });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default putResult;
