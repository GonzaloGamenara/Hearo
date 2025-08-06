import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import songsRoutes from "./routes/songsRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const url_origen = "https://urban-zebra-9gggpqx9g5qc7qgq-5173.app.github.dev";

dotenv.config();

await connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: url_origen,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/songs", songsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
