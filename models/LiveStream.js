const mongoose = require("mongoose");

const liveStreamSchema = new mongoose.Schema({
  host: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  isActive: { type: Boolean, default: true },
  viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  moderators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });

module.exports = mongoose.model("LiveStream", liveStreamSchema);
