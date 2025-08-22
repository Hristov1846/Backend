const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  try {
    const msg = await Message.create({ ...req.body, sender: req.user.id });
    res.status(201).json(msg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const msgs = await Message.find({ chatId: req.params.chatId }).populate("sender", "username");
    res.json(msgs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
