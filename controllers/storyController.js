const Story = require("../models/Story");

// Създаване на стори
exports.createStory = async (req, res) => {
  try {
    const story = new Story({
      user: req.user.id,
      image: req.body.image,
      video: req.body.video,
      visibleToCloseFriends: req.body.visibleToCloseFriends
    });
    await story.save();
    res.status(201).json(story);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Реакция на стори
exports.reactStory = async (req, res) => {
  try {
    const { reaction } = req.body;
    const story = await Story.findById(req.params.id);
    story.reactions.push({ user: req.user.id, reaction });
    if (!story.viewers.includes(req.user.id)) {
      story.viewers.push(req.user.id);
    }
    await story.save();
    res.json(story);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
