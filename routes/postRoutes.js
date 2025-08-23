import express from "express";
import { createPost, getPosts } from "../controllers/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Създаване на пост
router.post("/", authMiddleware, createPost);

// Взимане на всички постове
router.get("/", getPosts);

export default router;
