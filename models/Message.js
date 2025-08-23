import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // за 1:1 чат
    group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },   // за групов чат (по желание)
    text: { type: String },
    media: { type: String }, // линк към изображение/видео
    isTemporary: { type: Boolean, default: false }, // временни снимки като в Instagram
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
