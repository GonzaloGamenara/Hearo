import express from "express";
import {
  handleLoginOrRegister,
  LogOut,
  checkAuth,
} from "../controllers/authController.js";
import { onlyLogged } from "../middlewares/authorization.js";

const router = express.Router();

router.post("/login", handleLoginOrRegister);

router.get("/logout", LogOut);

router.get("/check-auth", onlyLogged, checkAuth);

export default router;
