const mongoose = require("mongoose");

const ModeratorSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Собственик на лайв/профил
  moderator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Модератор
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Moderator", ModeratorSchema);
