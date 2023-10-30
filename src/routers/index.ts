import express from "express";
import userRouter from "./user";
import practiceRouter from "./practice";
import authRouter from "./auth";

const router = express();
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/practice", practiceRouter);

export default router;
