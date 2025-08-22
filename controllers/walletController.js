const Wallet = require("../models/Wallet");
const Transaction = require("../models/Transaction");

// Взимане на баланс
exports.getBalance = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    res.json(wallet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Депозит
exports.deposit = async (req, res) => {
  try {
    const { amount } = req.body;
    const wallet = await Wallet.findOne({ user: req.user.id });
    wallet.balance += amount;
    await wallet.save();

    const transaction = new Transaction({ user: req.user.id, amount, type: "deposit" });
    await transaction.save();

    res.json(wallet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
