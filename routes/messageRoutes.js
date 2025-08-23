const express = require("express");
const { getMessages } = require("../controllers/messageController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Всички съобщения в чат
router.get("/:chatId", authMiddleware, getMessages);

module.exports = router;
