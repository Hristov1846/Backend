import express from "express";
import { askAI } from "../controllers/aiAssistantController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Задай въпрос на AI
router.post("/ask", authMiddleware, askAI);

export default router;
