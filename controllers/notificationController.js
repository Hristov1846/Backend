const Notification = require("../models/Notification");

// Взимане на известия
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Маркиране като прочетени
exports.markAsRead = async (req, res) => {
  try {
    await Notification.updateMany({ user: req.user.id, isRead: false }, { isRead: true });
    res.json({ message: "All marked as read" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
