import { Router } from "express";
import { getAll, getMe, get, save, update, remove } from "./index.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";

const router = Router();

router.get("/", async (req, res) => {
  const data = await getAll();
  res.status(200).json({ data });
});

//Package express bearer token to send req.token

router.get("/me", authMiddleware, async (req, res) => {
  res.status(200).json({ data: req.user });
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
  try {
    const data = await update(req.params.id, req.body);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  const data = await remove(req.params.id);
  res.status(200).json({ data });
});

export default router;
