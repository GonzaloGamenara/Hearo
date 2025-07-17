import express from "express";
import passport from "passport";

const router = express.Router();

// Ruta de callback a la que Google redirige luego del login
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "http://localhost:5173/home", // frontend local
  })
);

// Ruta para cerrar sesión
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send("Error al cerrar sesión");
    res.redirect("http://localhost:5173/login");
  });
});

// Ruta opcional para saber si hay un usuario logueado
router.get("/me", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: "No autenticado" });
  }
});

router.get(
  "/google",
  (req, res, next) => {
    const { nick, color } = req.query;
    console.log("👉 nick recibido:", nick);
    console.log("👉 color recibido:", color);
    req.session.nick = nick;
    req.session.color = color;
    next();
  },
  passport.authenticate("google", { scope: ["profile"] })
);

export default router;
