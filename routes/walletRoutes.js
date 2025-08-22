const express = require("express");
const router = express.Router();
const { getWallet, deposit } = require("../controllers/walletController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getWallet);
router.post("/deposit", authMiddleware, deposit);

module.exports = router;
