const mongoose = require("mongoose");

const giftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String },
  price: { type: Number, required: true } // V-Coins
}, { timestamps: true });

module.exports = mongoose.model("Gift", giftSchema);
