import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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

      const emailRegistrado = await User.findOne({ email });
      if (emailRegistrado) {
        return res.status(400).send({
          status: "Error",
          message: "Ya existe un usuario regristrado con este email",
        });
      }

      const usuarioExistente = await User.findOne({ user });
      if (usuarioExistente) {
        return res
          .status(400)
          .send({ status: "Error", message: "Apodo no disponible!" });
      }

      const salt = await bcryptjs.genSalt(5);
      const hashPassword = await bcryptjs.hash(req.body.password, salt);

      const nuevoUsuario = {
        email,
        password: hashPassword,
        color,
        user,
      };

      console.log(nuevoUsuario);
      User.create(nuevoUsuario);

      return res
        .status(201)
        .json({ message: "Usuario registrado exitosamente" });
    } else {
      const findUser = await User.findOne({ email });
      if (!findUser)
        return res
          .status(400)
          .send({ status: "Error", message: "Correo no registrado!" });

      const passwordConfirm = await bcryptjs.compare(
        password,
        findUser.password
      );
      if (!passwordConfirm)
        return res
          .status(400)
          .send({ status: "Error", message: "Contraseña Incorrecta" });

      const token = jsonwebtoken.sign(
        {
          user: findUser.user,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRATION }
      );

      const cookieOption = {
        httpOnly: true,
        sameSite: "Lax",
        expires: new Date(
          Date.now() +
            Number(process.env.JWT_COOKIE_EXPIRES) * 24 * 60 * 60 * 1000
        ),
        path: "/",
      };
      res.cookie("jwt", token, cookieOption);

      return res.send({
        status: "ok",
        message: "Usuario logueado exitosamente",
        redirect: "/home",
      });
    }
  } catch (error) {
    console.error("Error autenticando:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
}

export function LogOut(req, res) {
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "Lax",
    path: "/",
  });

  return res.status(200).json({ message: "Sesión cerrada exitosamente" });
}

export function checkAuth(req, res) {
  return res.status(200).json({ status: "ok", user: req.user });
}
