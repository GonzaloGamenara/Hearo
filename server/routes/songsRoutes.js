import express from "express";
import { getRandomSong, getDailySong } from "../controllers/songsController.js";

const router = express.Router();

router.get("/random", getRandomSong);
router.get("/daily", getDailySong);

export default router;
