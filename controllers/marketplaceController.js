const Marketplace = require("../models/Marketplace");

exports.createItem = async (req, res) => {
  try {
    const item = await Marketplace.create({ ...req.body, seller: req.user.id });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Marketplace.find().populate("seller", "username profilePicture");
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
