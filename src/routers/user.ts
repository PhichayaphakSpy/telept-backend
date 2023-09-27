import express from "express";
import registerUser from "../controllers/user/register";
import getUser from "../controllers/user/getUser";

const userRouter = express();

userRouter.post("/register", registerUser);
userRouter.get("/:id", getUser);

export default userRouter;
