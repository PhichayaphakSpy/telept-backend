import { Request, Response } from "express";
import getSessionsByDate from "../../services/pose/getSessionsByDate";

const getTodaySessions = async (req: Request, res: Response) => {
  try {

    const userId = parseInt(req.params["userId"]);
    const session = await getSessionsByDate(userId);

    if (session.length > 0) {
      res.status(200).json(session.at(0));
    } else {
      res.status(401).json({ error: "Can not get tasks" });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default getTodaySessions;
