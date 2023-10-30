import { Request, Response } from "express";
import postResultSession from "../../services/pose/postResultSession";

const postResult = async (req: Request, res: Response) => {
  try {
    const { taskId, poseId, score } = req.body;
    const session = await postResultSession(taskId, poseId, score);

    res.status(200).json({ session });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default postResult;
