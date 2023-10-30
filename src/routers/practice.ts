import express from "express";
import getPose from "../controllers/pose/getPose";
import getAllPose from "../controllers/pose/getAllPose";
import getTodaySessions from "../controllers/pose/getTodaySessions";
import { getAllResult } from "../controllers/user/getAllResult";
import postResult from "../controllers/pose/postResult";

const practiceRouter = express();

practiceRouter.get("/", getAllPose);
practiceRouter.get("/:id", getPose);
practiceRouter.post("/today", getTodaySessions);
practiceRouter.post("/today/saveresult", postResult);

export default practiceRouter;
