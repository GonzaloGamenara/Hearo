import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export async function handleLoginOrRegister(req, res) {
  const { email, password, color, user } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ status: "Error", message: "campos incompletos" });
  }

  try {
    if (user && color) {
      console.log(req.body);
      const existente = await User.find(req.body.user);
      if (existente) {
        res
          .status(400)
          .send({ status: "Error", message: "Apodo no disponible!" });
      }
      return res
        .status(201)
        .json({ message: "Usuario registrado exitosamente" });
    } else {
      //logica login
      return res.status(200).json({ message: "Usuario logueado exitosamente" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error del servidor, intente de nuevo" });
  }
}
