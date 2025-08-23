import express from "express";
import protect from "../middleware/authMiddleware.js";
import { chatWithAI } from "../controllers/aiController.js";

const router = express.Router();

router.post("/chat", protect, chatWithAI);

export default router;
