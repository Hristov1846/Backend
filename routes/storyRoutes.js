const express = require("express");
const { createStory, getStories } = require("../controllers/storyController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Създаване на сторѝ
router.post("/", authMiddleware, createStory);

// Вземане на всички сторѝ
router.get("/", getStories);

module.exports = router;
