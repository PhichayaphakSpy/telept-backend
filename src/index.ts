import express from "express";
import router from "./routers";
import cors from "cors";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
// const corsOption = {
//   origin: "http://localhost:*",
//   credentials: true,
// };

app.use(cors());
app.use(express.json());

app.get("/health-check", (req, res) => {
  res.send(`${Date()}: OK`);
});

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
