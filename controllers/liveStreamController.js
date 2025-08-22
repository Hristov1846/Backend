const LiveStream = require("../models/LiveStream");

exports.startLive = async (req, res) => {
  try {
    const live = await LiveStream.create({ host: req.user.id, ...req.body });
    res.status(201).json(live);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sendGift = async (req, res) => {
  try {
    const { gift, value } = req.body;
    const live = await LiveStream.findById(req.params.id);
    live.gifts.push({ sender: req.user.id, type: gift, value });
    await live.save();
    res.json(live);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
