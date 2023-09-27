import express from "express";
import registerUser from "../controllers/user/register";

const userRouter = express();

userRouter.post("/register", registerUser);

export default userRouter;
