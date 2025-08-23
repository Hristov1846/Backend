const express = require("express");
const { createChat, sendMessage } = require("../controllers/chatController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Създаване на чат
router.post("/", authMiddleware, createChat);

// Изпращане на съобщение
router.post("/:chatId/message", authMiddleware, sendMessage);

module.exports = router;
