import express from "express";
import userRouter from "./user";
import practiceRouter from "./practice";

const router = express();

router.use("/user", userRouter);
router.use("/practice", practiceRouter);

export default router;
