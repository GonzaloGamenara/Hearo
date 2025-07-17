// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import "./config/passport.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: "hearo_super_secret", // cambiar por algo más seguro en producción
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    app.listen(PORT, () =>
      console.log(`🚀 Backend escuchando en http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Error al conectar con MongoDB:", err);
  });
