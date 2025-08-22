const Chat = require("../models/Chat");
const Message = require("../models/Message");

// Създаване на чат
exports.createChat = async (req, res) => {
  try {
    const { members, isGroup, name } = req.body;
    const chat = new Chat({ members, isGroup, name });
    await chat.save();
    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Изпращане на съобщение
exports.sendMessage = async (req, res) => {
  try {
    const message = new Message({
      chat: req.body.chatId,
      sender: req.user.id,
      text: req.body.text,
      image: req.body.image,
      video: req.body.video,
      temporary: req.body.temporary
    });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
