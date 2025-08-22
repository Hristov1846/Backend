const express = require("express");
const router = express.Router();
const { getBalance, deposit } = require("../controllers/walletController");
const auth = require("../middleware/auth");

router.get("/balance", auth, getBalance);
router.post("/deposit", auth, deposit);

module.exports = router;
