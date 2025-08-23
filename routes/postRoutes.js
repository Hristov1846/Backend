const express = require("express");
const { createPost, getPosts } = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Създаване на пост
router.post("/", authMiddleware, createPost);

// Вземане на постове
router.get("/", getPosts);

module.exports = router;
