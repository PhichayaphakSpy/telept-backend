import express from "express";
import registerUser from "../controllers/user/register";
import getUser from "../controllers/user/getUser";
import { getAllResult } from "../controllers/user/getAllResult";
import gradePatient from "../controllers/user/gradePatient";
import getHistory from "../controllers/user/getHistory";
import getStats from "../controllers/user/getStats";

const userRouter = express();

userRouter.post("/register", registerUser);
userRouter.post("/gradepatient", gradePatient);
userRouter.get("/:userId/dashboard", getHistory);
userRouter.get("/:id", getUser);
userRouter.get("/:id/result", getAllResult);
userRouter.get("/:id/stat", getStats);

export default userRouter;
