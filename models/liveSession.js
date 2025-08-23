import mongoose from "mongoose";

const liveSessionSchema = new mongoose.Schema(
  {
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String },
    isBattle: { type: Boolean, default: false },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // за битки
    viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    moderators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isActive: { type: Boolean, default: true },
    gifts: [
      {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        amount: { type: Number },
      },
    ],
    totalPoints: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("LiveSession", liveSessionSchema);
