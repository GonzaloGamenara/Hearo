import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function onlyLogged(req, res, next) {
  const token = req.cookies.jwt;
  console.log("Token recibido:", token);

  if (!token) {
    return res.status(401).json({ message: "No autorizado (sin token)" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decodificado:", decoded);
    req.user = decoded; // para checkAuth u otras rutas
    next();
  } catch (error) {
    console.error("Error al verificar el token:", error.message);
    return res.status(401).json({ message: "Token inválido" });
  }
}
