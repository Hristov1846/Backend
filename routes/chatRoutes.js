import express from "express";
import protect from "../middleware/authMiddleware.js";
import { sendMessage, getConversation } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", protect, sendMessage);
router.get("/:receiverId", protect, getConversation);

export default router;
