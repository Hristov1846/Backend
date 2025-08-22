const mongoose = require("mongoose");

const liveStreamSchema = new mongoose.Schema(
  {
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, default: "Live Stream" },
    viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    moderators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    gifts: [
      {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        type: { type: String }, // напр. "rose", "dolphin", "elephant"
        value: { type: Number }, // стойност във V-Coins
      },
    ],
    battleOpponent: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    battleScores: {
      host: { type: Number, default: 0 },
      opponent: { type: Number, default: 0 },
    },
    isLive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LiveStream", liveStreamSchema);
