const express = require("express");
const router = express.Router();
const { createStory, getStories } = require("../controllers/storyController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createStory);
router.get("/", authMiddleware, getStories);

module.exports = router;
