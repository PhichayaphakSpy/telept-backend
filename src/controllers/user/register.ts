import { Request, Response } from "express";

const registerUser = (req: Request, res: Response) => {
    res.send('register')
}

export default registerUser;