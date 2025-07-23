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

      return res.status(200).json({ message: "Usuario logueado exitosamente" });
    }
  } catch (error) {
    console.error("Error autenticando:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
}
