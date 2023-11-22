import { Request, Response } from "express";
import getStatById from "../../services/user/getStatById";

const getStats = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params["id"]);

    const stat = await getStatById(userId);

    res.status(200).json(stat);
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default getStats;
