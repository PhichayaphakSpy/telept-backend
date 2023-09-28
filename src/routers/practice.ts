import express from "express";
import getPose from "../controllers/pose/getPose";
import getAllPose from "../controllers/pose/getAllPose";

const practiceRouter = express();

practiceRouter.get("/", getAllPose);
practiceRouter.get("/:id", getPose);

export default practiceRouter;
