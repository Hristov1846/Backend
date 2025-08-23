// server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import liveRoutes from "./routes/liveRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import marketplaceRoutes from "./routes/marketplaceRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import aiAssistantRoutes from "./routes/aiAssistantRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import moderatorRoutes from "./routes/moderatorRoutes.js";  // ✅ добавен модераторски модул
import { errorHandler } from "./middleware/errorHandler.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/live", liveRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/marketplace", marketplaceRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/ai", aiAssistantRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/moderators", moderatorRoutes); // ✅ ново включване

// Error handler
app.use(errorHandler);

// Deployment (ако има frontend)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
