import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import LiveSession from "../models/LiveSession.js";
import Product from "../models/Product.js";

// @desc Get platform statistics
// @route GET /api/admin/stats
export const getStats = async (req, res) => {
  try {
    const usersCount = await User.countDocuments();
    const transactionsCount = await Transaction.countDocuments();
    const liveSessionsCount = await LiveSession.countDocuments({ isActive: true });
    const productsCount = await Product.countDocuments({ isSold: false });

    res.json({
      usersCount,
      transactionsCount,
      liveSessionsCount,
      productsCount,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get all users
// @route GET /api/admin/users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Delete a user
// @route DELETE /api/admin/users/:id
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc End live session manually
// @route POST /api/admin/live/end/:id
export const endLiveByAdmin = async (req, res) => {
  try {
    const session = await LiveSession.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Session not found" });

    session.isActive = false;
    await session.save();

    res.json({ message: "Live session ended by admin" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get all reported products
// @route GET /api/admin/products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("user", "firstName lastName");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
