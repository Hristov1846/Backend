const express = require("express");
const router = express.Router();
const { createPost, likePost, reactPost } = require("../controllers/postController");
const auth = require("../middleware/auth");

router.post("/create", auth, createPost);
router.post("/:id/like", auth, likePost);
router.post("/:id/react", auth, reactPost);

module.exports = router;
