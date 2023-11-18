import express from "express";
import getPose from "../controllers/pose/getPose";
import getAllPose from "../controllers/pose/getAllPose";
import getTodaySessions from "../controllers/pose/getTodaySessions";
import assignTask from "../controllers/pose/assignTask";
import putResult from "../controllers/pose/putResult";

const practiceRouter = express();

practiceRouter.get("/", getAllPose);
practiceRouter.get("/:id", getPose);
practiceRouter.post("/today", getTodaySessions);
practiceRouter.put("/today/saveresult", putResult);
practiceRouter.post("/assign", assignTask);

export default practiceRouter;
