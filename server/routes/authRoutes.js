import express from "express";
import { handleLoginOrRegister as LogOrReg } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", LogOrReg);

export default router;
