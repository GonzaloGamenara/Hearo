export async function handleLoginOrRegister(req, res) {
  const { email, password, color, user } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "campos incompletos" });

    try {
      if (user && color) {
        //logica registro
        return res
          .status(201)
          .json({ message: "Usuario registrado exitosamente" });
      } else {
        //logica login
        return res
          .status(200)
          .json({ message: "Usuario logueado exitosamente" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error del servidor, intente de nuevo" });
    }
  }
}
