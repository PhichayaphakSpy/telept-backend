import express from "express";
import router from "./routers";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/health-check", (req, res) => {
  res.send(`${Date()}: OK`);
});

app.use("/api/v1", router)

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
