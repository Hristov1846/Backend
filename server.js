import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// Роутове
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import marketplaceRoutes from "./routes/marketplaceRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import liveRoutes from "./routes/liveRoutes.js";
import moderatorRoutes from "./routes/moderatorRoutes.js";
import aiAssistantRoutes from "./routes/aiAssistantRoutes.js"; // 🆕 AI Assistant

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB връзка
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Основни маршрути
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/marketplace", marketplaceRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/live", liveRoutes);
app.use("/api/moderators", moderatorRoutes);
app.use("/api/ai-assistant", aiAssistantRoutes); // 🆕 AI Assistant route

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Backend server is running with AI Assistant included!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
