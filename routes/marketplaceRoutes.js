const express = require("express");
const { addItem, getItems } = require("../controllers/marketplaceController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Добавяне на артикул
router.post("/add", authMiddleware, addItem);

// Вземане на всички артикули
router.get("/", getItems);

module.exports = router;
