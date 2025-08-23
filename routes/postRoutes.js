import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createPost,
  getPosts,
  likePost,
  reactToPost,
  addComment,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", protect, createPost);
router.get("/", protect, getPosts);
router.post("/:id/like", protect, likePost);
router.post("/:id/react", protect, reactToPost);
router.post("/:id/comment", protect, addComment);

export default router;
