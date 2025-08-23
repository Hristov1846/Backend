import LiveSession from "../models/LiveSession.js";
import User from "../models/User.js";

// @desc Start a live session
// @route POST /api/live/start
export const startLive = async (req, res) => {
  try {
    const { title, isBattle, participants } = req.body;

    const session = await LiveSession.create({
      host: req.user._id,
      title,
      isBattle: isBattle || false,
      participants: isBattle ? [req.user._id, ...participants] : [req.user._id],
    });

    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc End live session
// @route POST /api/live/end/:id
export const endLive = async (req, res) => {
  try {
    const session = await LiveSession.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.host.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    session.isActive = false;
    await session.save();

    res.json({ message: "Live session ended" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Join live session
// @route POST /api/live/join/:id
export const joinLive = async (req, res) => {
  try {
    const session = await LiveSession.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Session not found" });

    if (!session.viewers.includes(req.user._id)) {
      session.viewers.push(req.user._id);
      await session.save();
    }

    res.json({ message: "Joined live session" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Send gift during live
// @route POST /api/live/gift/:id
export const sendGiftLive = async (req, res) => {
  try {
    const { amount } = req.body;
    const session = await LiveSession.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Session not found" });

    session.gifts.push({ sender: req.user._id, amount });
    session.totalPoints += amount;

    await session.save();

    res.json({ message: "Gift sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Add moderator
// @route POST /api/live/moderator/:id
export const addModerator = async (req, res) => {
  try {
    const { moderatorId } = req.body;
    const session = await LiveSession.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.host.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    if (!session.moderators.includes(moderatorId)) {
      session.moderators.push(moderatorId);
      await session.save();
    }

    res.json({ message: "Moderator added" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
