const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");
// Тук оправяме името на middleware-а
const auth = require("../middleware/authMiddleware");

// Създаване на чат
router.post("/", auth, chatController.createChat);

// Вземане на всички чатове на потребител
router.get("/", auth, chatController.getUserChats);

// Вземане на конкретен чат по ID
router.get("/:chatId", auth, chatController.getChatById);

// Добавяне на потребител в чат
router.post("/:chatId/addUser", auth, chatController.addUserToChat);

// Премахване на потребител от чат
router.post("/:chatId/removeUser", auth, chatController.removeUserFromChat);

module.exports = router;
