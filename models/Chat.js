const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  isGroup: { type: Boolean, default: false },
  name: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Chat", chatSchema);
