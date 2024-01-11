import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoute from "./modules/user/user.route.js";
const app = express();
app.use(express.json());

app.use("/users", userRoute);

app.get("/", (_, res) => {
  return res.send("Sistem Working");
});

app.listen(4000, async () => {
  console.log("Server working in PORT 4000");
});
