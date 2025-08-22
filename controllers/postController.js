const Post = require("../models/Post");

// Създаване на публикация
exports.createPost = async (req, res) => {
  try {
    const post = new Post({
      user: req.user.id,
      content: req.body.content,
      image: req.body.image,
      video: req.body.video
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Харесване
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.user.id)) {
      post.likes.push(req.user.id);
      await post.save();
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Реакция
exports.reactPost = async (req, res) => {
  try {
    const { type } = req.body; // ❤️ 😆 😮 😢 😡
    const post = await Post.findById(req.params.id);

    const existingReaction = post.reactions.find(r => r.user.toString() === req.user.id);
    if (existingReaction) {
      existingReaction.type = type;
    } else {
      post.reactions.push({ user: req.user.id, type });
    }

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
