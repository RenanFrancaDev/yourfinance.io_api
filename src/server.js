import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bearerToken from "express-bearer-token";
import knex from "./services/knex.js";
import userRouter from "./modules/user/user.route.js";
import authRouter from "./modules/auth/auth.route.js";
import categoriesRouter from './modules/categories/categories.route.js'
const app = express();
app.use(express.json());
app.use(cors());
app.use(bearerToken());

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use('/categories', categoriesRouter)

app.get("/", (_, res) => {
  return res.send("Sistem Working");
});

app.listen(4000, async () => {
  const result = await knex("users");

  console.log("Server working in PORT 4000");
});
