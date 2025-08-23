import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getStats,
  getAllUsers,
  deleteUser,
  endLiveByAdmin,
  getAllProducts,
} from "../controllers/adminController.js";

const router = express.Router();

// всички рутове са защитени
router.get("/stats", protect, getStats);
router.get("/users", protect, getAllUsers);
router.delete("/users/:id", protect, deleteUser);
router.post("/live/end/:id", protect, endLiveByAdmin);
router.get("/products", protect, getAllProducts);

export default router;
