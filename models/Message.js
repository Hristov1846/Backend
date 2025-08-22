const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String },
    media: { type: String }, // снимка/видео
    isTemporary: { type: Boolean, default: false }, // временни снимки
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
