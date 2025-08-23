const express = require("express");
const { addModerator, removeModerator } = require("../controllers/moderatorController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Добавяне на модератор
router.post("/add", authMiddleware, addModerator);

// Премахване на модератор
router.delete("/remove/:id", authMiddleware, removeModerator);

module.exports = router;
