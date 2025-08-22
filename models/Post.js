const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String },
  image: { type: String },
  video: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  reactions: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String } // ❤️ 😆 😮 😢 😡
  }],
  comments: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: String,
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
