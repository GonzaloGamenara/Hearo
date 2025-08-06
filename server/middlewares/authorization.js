import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

export async function onlyLogged(req, res, next) {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "No autorizado (sin token)" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("usuario decodificado", decoded);
    const usuarioExistente = await User.findOne({ user: decoded.user });
    if (!usuarioExistente) {
      return res
        .status(400)
        .send({ status: "Error", message: "Usuario no existente!" });
    }
    return res.status(200).json({ status: "ok", user: usuarioExistente });
  } catch (error) {
    console.error("Error al verificar el token:", error.message);
    return res.status(401).json({ message: "Token inválido" });
  }
}
