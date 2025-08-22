const Story = require("../models/Story");

exports.createStory = async (req, res) => {
  try {
    const story = await Story.create({ ...req.body, user: req.user.id });
    res.status(201).json(story);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStories = async (req, res) => {
  try {
    const stories = await Story.find({ expiresAt: { $gt: Date.now() } }).populate("user", "username profilePicture");
    res.json(stories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
