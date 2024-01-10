import express from "express";
import userRoute from "./modules/user/user.route.js";
const app = express();
app.use(express.json());

app.use("user", userRoute);

app.get("/", (_, res) => {
  return res.send("Sistem Working");
});

app.listen(4000, () => {
  console.log("Server working in PORT 4000");
});
