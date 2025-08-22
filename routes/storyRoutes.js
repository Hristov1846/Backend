const express = require("express");
const router = express.Router();
const { createStory, reactStory } = require("../controllers/storyController");
const auth = require("../middleware/auth");

router.post("/create", auth, createStory);
router.post("/:id/react", auth, reactStory);

module.exports = router;
