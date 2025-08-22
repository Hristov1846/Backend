const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: { type: String },
  image: { type: String },
  video: { type: String },
  temporary: { type: Boolean, default: false } // временни снимки
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);
