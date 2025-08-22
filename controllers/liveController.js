const LiveStream = require("../models/LiveStream");

// Стартиране на лайф
exports.startLive = async (req, res) => {
  try {
    const live = new LiveStream({ host: req.user.id, title: req.body.title });
    await live.save();
    res.status(201).json(live);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Добавяне на зрител
exports.joinLive = async (req, res) => {
  try {
    const live = await LiveStream.findById(req.params.id);
    if (!live.viewers.includes(req.user.id)) {
      live.viewers.push(req.user.id);
      await live.save();
    }
    res.json(live);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
