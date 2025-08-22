const express = require("express");
const router = express.Router();
const { createItem, getItems } = require("../controllers/marketplaceController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createItem);
router.get("/", getItems);

module.exports = router;
