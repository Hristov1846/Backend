const User = require("../models/User");

// Взимане на профил
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("friends followers following wallet");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Актуализиране на профил
exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Добавяне на приятел
exports.addFriend = async (req, res) => {
  try {
    const { friendId } = req.body;
    const user = await User.findById(req.user.id);
    if (!user.friends.includes(friendId)) {
      user.friends.push(friendId);
      await user.save();
    }
    res.json({ message: "Friend added" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
