const express = require("express");
const { startLive, joinLive } = require("../controllers/liveController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Стартиране на live
router.post("/start", authMiddleware, startLive);

// Присъединяване към live
router.post("/join/:id", authMiddleware, joinLive);

module.exports = router;
