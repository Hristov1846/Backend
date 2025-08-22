const Wallet = require("../models/Wallet");

exports.getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    res.json(wallet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deposit = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    wallet.balance += req.body.amount;
    wallet.transactions.push({ type: "deposit", amount: req.body.amount });
    await wallet.save();
    res.json(wallet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
