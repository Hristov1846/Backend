const express = require("express");
const router = express.Router();
const { createChat, sendMessage } = require("../controllers/chatController");
const auth = require("../middleware/auth");

router.post("/create", auth, createChat);
router.post("/send", auth, sendMessage);

module.exports = router;
