const mongoose = require("mongoose");

const marketplaceSchema = new mongoose.Schema(
  {
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    currency: { type: String, default: "EUR" },
    images: [{ type: String }],
    category: { type: String },
    isSold: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Marketplace", marketplaceSchema);
