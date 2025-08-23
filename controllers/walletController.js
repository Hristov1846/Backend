const express = require("express");
const { addFunds, getBalance } = require("../controllers/walletController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Добавяне на средства
router.post("/add", authMiddleware, addFunds);

// Взимане на баланс
router.get("/balance", authMiddleware, getBalance);

module.exports = router;
