import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getUserProfile,
  updateUserProfile,
  followUser,
  unfollowUser,
  addFriend,
  pokeUser,
  likeProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/:id", protect, getUserProfile);
router.put("/:id", protect, updateUserProfile);

router.post("/follow/:id", protect, followUser);
router.post("/unfollow/:id", protect, unfollowUser);

router.post("/add-friend/:id", protect, addFriend);
router.post("/poke/:id", protect, pokeUser);
router.post("/like/:id", protect, likeProfile);

export default router;
