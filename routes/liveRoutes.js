const express = require("express");
const router = express.Router();
const { startLive, joinLive } = require("../controllers/liveController");
const auth = require("../middleware/auth");

router.post("/start", auth, startLive);
router.post("/:id/join", auth, joinLive);

module.exports = router;
