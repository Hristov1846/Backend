const express = require("express");
const router = express.Router();
const {
  createChat,
  getUserChats,
  getChatById,
  addUserToChat,
  removeUserFromChat,
} = require("../controllers/chatController");
const authMiddleware = require("../middleware/authMiddleware");

// Създаване на чат
router.post("/", authMiddleware, createChat);

// Вземане на всички чатове на потребител
router.get("/", authMiddleware, getUserChats);

// Вземане на конкретен чат по ID
router.get("/:chatId", authMiddleware, getChatById);

// Добавяне на потребител в чат
router.post("/:chatId/addUser", authMiddleware, addUserToChat);

// Премахване на потребител от чат
router.post("/:chatId/removeUser", authMiddleware, removeUserFromChat);

module.exports = router;
