import { Request, Response } from "express";
import getResultsById from "../../services/user/getResultsById";

export const getAllResult = async (req: Request, res: Response) => {
  try {
    const userid = parseInt(req.params["id"]);
    const result = await getResultsById(userid);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};
