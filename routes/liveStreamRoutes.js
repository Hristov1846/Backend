const express = require("express");
const { createStream, endStream } = require("../controllers/liveStreamController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Стартиране на стрийм
router.post("/create", authMiddleware, createStream);

// Приключване на стрийм
router.post("/end/:id", authMiddleware, endStream);

module.exports = router;
