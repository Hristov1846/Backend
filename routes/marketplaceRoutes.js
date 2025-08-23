import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createProduct,
  getProducts,
  getProductById,
  buyProduct,
} from "../controllers/marketplaceController.js";

const router = express.Router();

router.post("/", protect, createProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProductById);
router.post("/buy/:id", protect, buyProduct);

export default router;
