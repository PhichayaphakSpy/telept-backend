import express from "express";
import registerUser from "../controllers/user/register";
import getUser from "../controllers/user/getUser";
import { getAllResult } from "../controllers/user/getAllResult";

const userRouter = express();

userRouter.post("/register", registerUser);
userRouter.get("/:id", getUser);
userRouter.get("/:id/result", getAllResult);


export default userRouter;
