import { Request, Response } from "express";
import loginService from "../../services/auth/login";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);

    res.status(200).json(token);
  } catch (err) {
    res.status(401).json({ err });
  }
};

export default login;
