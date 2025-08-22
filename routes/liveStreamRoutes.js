const express = require("express");
const router = express.Router();
const { startLive, sendGift } = require("../controllers/liveStreamController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/start", authMiddleware, startLive);
router.post("/:id/gift", authMiddleware, sendGift);

module.exports = router;
