import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import knex from "./services/knex.js";
dotenv.config();
import userRoute from "./modules/user/user.route.js";
import authRoute from "./modules/auth/auth.route.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/auth", authRoute);

app.get("/", (_, res) => {
  return res.send("Sistem Working");
});

app.listen(4000, async () => {
  const result = await knex("users");

  console.log("Server working in PORT 4000");
});
