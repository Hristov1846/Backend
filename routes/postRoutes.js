const express = require("express");
const router = express.Router();
const { createPost, likePost } = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createPost);
router.put("/:id/like", authMiddleware, likePost);

module.exports = router;
