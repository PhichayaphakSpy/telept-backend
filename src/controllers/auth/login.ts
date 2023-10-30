import { Request, Response } from "express";
import loginService from "../../services/auth/login";

const login = async (req: Request, res: Response) => {
  try {
    const { nationalId, password } = req.body;
    const token = await loginService(nationalId, password);

    if (token) {
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default login;
