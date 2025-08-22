const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  image: { type: String },
  video: { type: String },
  viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  reactions: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reaction: { type: String }
  }],
  visibleToCloseFriends: { type: Boolean, default: false },
  expiresAt: { type: Date, default: () => Date.now() + 24*60*60*1000 }
}, { timestamps: true });

module.exports = mongoose.model("Story", storySchema);
