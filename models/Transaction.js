const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["deposit", "withdraw", "gift"], required: true }
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
