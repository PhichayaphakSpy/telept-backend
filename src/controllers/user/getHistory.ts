import { Request, Response } from "express";
import getUserHistory from "../../services/user/getUserHistory";

const getHistory = async (req: Request, res: Response) => {
  try {
    const userId =  parseInt(req.params["id"]);

    const history = await getUserHistory(userId);

    res.status(200).json(history);
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default getHistory;
