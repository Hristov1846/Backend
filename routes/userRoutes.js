const express = require("express");
const router = express.Router();
const { getUserProfile, updateProfile } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/:id", authMiddleware, getUserProfile);
router.put("/update", authMiddleware, updateProfile);

module.exports = router;
