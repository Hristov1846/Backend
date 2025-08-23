import Message from "../models/Message.js";

// @desc Send a new message
// @route POST /api/chat
export const sendMessage = async (req, res) => {
  try {
    const { receiver, text, media, isTemporary } = req.body;

    const message = await Message.create({
      sender: req.user._id,
      receiver,
      text,
      media,
      isTemporary,
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get conversation between two users
// @route GET /api/chat/:receiverId
export const getConversation = async (req, res) => {
  try {
    const { receiverId } = req.params;
    const messages = await Message.find({
      $or: [
        { sender: req.user._id, receiver: receiverId },
        { sender: receiverId, receiver: req.user._id },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
