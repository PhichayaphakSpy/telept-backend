import express from "express";
import login from "../controllers/auth/login";

const authRouter = express();

authRouter.post("/login", login);

export default authRouter;
