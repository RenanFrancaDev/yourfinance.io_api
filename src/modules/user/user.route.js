import { Router } from "express";
import { getAll, getMe, get, save, update, remove } from "./index.js";

const router = Router();

router.get("/", async (req, res) => {
  const data = await getAll();
  res.status(200).json({ data });
});

//Package express bearer token to send req.token
router.get("/me", async (req, res) => {
  const data = await getMe(req.token);
  if (data.error) {
    res.status(403).json({ error: data.error });
  }
  res.status(200).json({ data });
});

router.get("/:id", async (req, res) => {
  const data = await get(req.params.id);
  res.status(200).json({ data });
});

router.post("/", async (req, res) => {
  const data = await save(req.body);
  res.status(200).json({ data });
});

router.put("/:id", async (req, res) => {
  const data = await update(req.params.id, req.body);
  res.status(200).json({ data });
});

router.delete("/:id", async (req, res) => {
  const data = await remove(req.params.id);
  res.status(200).json({ data });
});

export default router;
