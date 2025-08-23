const express = require("express");
const { getNotifications } = require("../controllers/notificationController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Вземане на всички нотификации
router.get("/", authMiddleware, getNotifications);

module.exports = router;
