import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Само за админи (пример)
router.get("/dashboard", authMiddleware, (req, res) => {
  if (req.user && req.user.role === "admin") {
    res.json({ message: "Welcome, Admin!" });
  } else {
    res.status(403).json({ error: "Access denied" });
  }
});

export default router;
