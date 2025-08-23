import Post from "../models/Post.js";

// Създаване на пост
export const createPost = async (req, res) => {
  try {
    const { content, image } = req.body;

    const post = await Post.create({
      author: req.user.id,
      content,
      image,
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Create Post Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Взимане на постове
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "firstName lastName email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    console.error("Get Posts Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
