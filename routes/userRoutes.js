const express = require("express");
const router = express.Router();
const { getUserProfile, updateProfile, addFriend } = require("../controllers/userController");
const auth = require("../middleware/auth");

router.get("/:id", auth, getUserProfile);
router.put("/update", auth, updateProfile);
router.post("/add-friend", auth, addFriend);

module.exports = router;
