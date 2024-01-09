import express from "express";
const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  return res.send("Sistem Working");
});

app.listen(4000, () => {
  console.log("Server working in PORT 4000");
});
