import express from "express";
import { authCallback, getMe } from "../controllers/authController";
import { protectRoute } from "../middleware/auth";

const router = express.Router();

router.get("/me", protectRoute, getMe)
router.post("/callback", authCallback)

export default router