import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getBalance,
  depositCoins,
  withdrawCoins,
  transferCoins,
  sendGift,
} from "../controllers/walletController.js";

const router = express.Router();

router.get("/balance", protect, getBalance);
router.post("/deposit", protect, depositCoins);
router.post("/withdraw", protect, withdrawCoins);
router.post("/transfer", protect, transferCoins);
router.post("/gift", protect, sendGift);

export default router;
