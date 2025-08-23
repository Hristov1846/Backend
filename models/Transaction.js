import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: {
      type: String,
      enum: ["deposit", "withdraw", "transfer", "gift"],
      required: true,
    },
    amount: { type: Number, required: true },
    targetUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // за transfer/gift
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
