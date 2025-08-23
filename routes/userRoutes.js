const express = require("express");
const { getUser, updateUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Вземане на информация за потребител
router.get("/:id", authMiddleware, getUser);

// Обновяване на потребител
router.put("/:id", authMiddleware, updateUser);

module.exports = router;
