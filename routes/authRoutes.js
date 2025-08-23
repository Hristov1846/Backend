import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Регистрация
router.post("/register", registerUser);

// Логин
router.post("/login", loginUser);

// Профил (изисква токен)
router.get("/profile", authMiddleware, getUserProfile);

export default router;
