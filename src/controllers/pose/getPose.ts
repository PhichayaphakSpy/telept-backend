import { Request, Response } from "express-serve-static-core";
import getPoseById from "../../services/pose/getPoseById";

const getPose = async (req: Request, res: Response) => {
  try {
    const poseId = parseInt(req.params["id"]);

    const pose = await getPoseById(poseId);

    res.status(200).json({ pose });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default getPose;
