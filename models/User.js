const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: true },
  profilePic: { type: String, default: "" },
  coverPic: { type: String, default: "" },
  bio: { type: String, default: "" },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  wallet: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet" },
  isPro: { type: Boolean, default: false },
  role: { type: String, enum: ["user", "moderator", "admin"], default: "user" }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
