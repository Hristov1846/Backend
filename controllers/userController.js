import User from "../models/User.js";

// @desc Get user profile
// @route GET /api/users/:id
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Update user profile
// @route PUT /api/users/:id
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (req.user._id.toString() !== user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    user.firstName = req.body.firstName || user.firstName;
    user.middleName = req.body.middleName || user.middleName;
    user.lastName = req.body.lastName || user.lastName;
    user.avatar = req.body.avatar || user.avatar;
    user.coverPhoto = req.body.coverPhoto || user.coverPhoto;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Follow a user
// @route POST /api/users/follow/:id
export const followUser = async (req, res) => {
  try {
    const targetUser = await User.findById(req.params.id);
    if (!targetUser) return res.status(404).json({ message: "User not found" });

    if (targetUser.followers.includes(req.user._id)) {
      return res.status(400).json({ message: "Already following this user" });
    }

    targetUser.followers.push(req.user._id);
    await targetUser.save();

    req.user.following.push(targetUser._id);
    await req.user.save();

    res.json({ message: "User followed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Unfollow a user
// @route POST /api/users/unfollow/:id
export const unfollowUser = async (req, res) => {
  try {
    const targetUser = await User.findById(req.params.id);
    if (!targetUser) return res.status(404).json({ message: "User not found" });

    targetUser.followers = targetUser.followers.filter(
      (id) => id.toString() !== req.user._id.toString()
    );
    await targetUser.save();

    req.user.following = req.user.following.filter(
      (id) => id.toString() !== targetUser._id.toString()
    );
    await req.user.save();

    res.json({ message: "User unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Add friend
// @route POST /api/users/add-friend/:id
export const addFriend = async (req, res) => {
  try {
    const targetUser = await User.findById(req.params.id);
    if (!targetUser) return res.status(404).json({ message: "User not found" });

    if (req.user.friends.includes(targetUser._id)) {
      return res.status(400).json({ message: "Already friends" });
    }

    req.user.friends.push(targetUser._id);
    targetUser.friends.push(req.user._id);

    await req.user.save();
    await targetUser.save();

    res.json({ message: "Friend added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Poke a user
// @route POST /api/users/poke/:id
export const pokeUser = async (req, res) => {
  try {
    const targetUser = await User.findById(req.params.id);
    if (!targetUser) return res.status(404).json({ message: "User not found" });

    // Тук може да се запише нотификация в бъдеще
    res.json({ message: `${req.user.firstName} poked ${targetUser.firstName}` });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Like a profile
// @route POST /api/users/like/:id
export const likeProfile = async (req, res) => {
  try {
    const targetUser = await User.findById(req.params.id);
    if (!targetUser) return res.status(404).json({ message: "User not found" });

    // Тук може да се добави логика за преброяване на "profile likes"
    res.json({ message: `You liked ${targetUser.firstName}'s profile` });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
