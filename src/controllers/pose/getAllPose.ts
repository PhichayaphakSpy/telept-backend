import { Request, Response } from "express-serve-static-core";
import getPose from "../../services/pose/getPose";

const getAllPose = async (req: Request, res: Response) => {
  try {
    const pose = await getPose();

    res.status(200).json({ pose });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default getAllPose;
