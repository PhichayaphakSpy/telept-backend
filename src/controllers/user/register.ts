import { Request, Response } from "express";
import register from "../../services/user/register";

const registerUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    await register(payload);

    res.status(200).json({ result: "created" });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default registerUser;
