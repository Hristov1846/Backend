import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js"; // увери се, че имаш User модел
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// 🔹 Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Проверка за съществуващ email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Имейлът вече съществува!" });
    }

    // Hash на паролата
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "✅ Успешна регистрация!" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Грешка при регистрация ❌" });
  }
});

// 🔹 Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Търсим user по email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Невалиден имейл ❌" });
    }

    // Проверяваме паролата
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Грешна парола ❌" });
    }

    // Генерираме JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Грешка при вход ❌" });
  }
});

export default router;
