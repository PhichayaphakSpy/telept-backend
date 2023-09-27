import express from "express";
import getPose from "../controllers/pose/getPose";

const practiceRouter = express();

practiceRouter.get("/:id", getPose);

export default practiceRouter;
