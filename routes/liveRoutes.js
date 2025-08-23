import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  startLive,
  endLive,
  joinLive,
  sendGiftLive,
  addModerator,
} from "../controllers/liveController.js";

const router = express.Router();

router.post("/start", protect, startLive);
router.post("/end/:id", protect, endLive);
router.post("/join/:id", protect, joinLive);
router.post("/gift/:id", protect, sendGiftLive);
router.post("/moderator/:id", protect, addModerator);

export default router;
