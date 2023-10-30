import express from "express";
import getPose from "../controllers/pose/getPose";
import getAllPose from "../controllers/pose/getAllPose";
import getTodaySessions from "../controllers/pose/getTodaySessions";
import { getAllResult } from "../controllers/user/getAllResult";

const practiceRouter = express();

practiceRouter.get("/", getAllPose);
practiceRouter.get("/:id", getPose);
practiceRouter.post("/today", getTodaySessions);
practiceRouter.post("/today/:sessionId/result");

export default practiceRouter;
