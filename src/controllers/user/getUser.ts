import { Request, Response } from "express";
import getUserById from "../../services/user/getUserById";

const getUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params["id"]);

    const user = await getUserById(userId);

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default getUser;
