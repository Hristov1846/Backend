const express = require("express");
const router = express.Router();
const Moderator = require("../models/Moderator");
const authMiddleware = require("../middleware/authMiddleware");

// Добавяне на модератор
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { moderatorId } = req.body;
    const newMod = new Moderator({
      owner: req.user.id,
      moderator: moderatorId,
    });
    await newMod.save();
    res.json({ message: "Модераторът е добавен успешно!", newMod });
  } catch (err) {
    res.status(500).json({ error: "Грешка при добавяне на модератор" });
  }
});

// Премахване на модератор
router.delete("/remove/:id", authMiddleware, async (req, res) => {
  try {
    await Moderator.findOneAndDelete({
      owner: req.user.id,
      moderator: req.params.id,
    });
    res.json({ message: "Модераторът е премахнат успешно!" });
  } catch (err) {
    res.status(500).json({ error: "Грешка при премахване на модератор" });
  }
});

// Извличане на всички модератори за даден owner
router.get("/list", authMiddleware, async (req, res) => {
  try {
    const mods = await Moderator.find({ owner: req.user.id }).populate("moderator", "name email");
    res.json(mods);
  } catch (err) {
    res.status(500).json({ error: "Грешка при зареждане на модераторите" });
  }
});

module.exports = router;
