import express from "express";
import {
  handleLoginOrRegister as LogOrReg,
  LogOut,
  checkAuth,
} from "../controllers/authController.js";
import { onlyLogged, onlyUnlogged } from "../middlewares/authorization.js";

const router = express.Router();

router.post("/login", onlyUnlogged, LogOrReg);
router.get("/logout", LogOut);
router.get("/check-auth", onlyLogged, checkAuth);

export default router;

//MODIFICAR EL VERIFICADOR DE LOGEO y de UNLOGEO ya que no me sirve la manera en la que
//estoy manejando las rutas, no hago get para estar lo manejo con ROUTER desde REACT y no puedo
//verificar si ya esta logeado el usuario para redireccionar directamente al HOME, debo buscar
//como hacerlo
