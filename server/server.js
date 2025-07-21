import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config();

await connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(
  cors({
    origin: "https://urban-zebra-9gggpqx9g5qc7qgq-5173.app.github.dev",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

console.log(`Servidor escuchando en el puerto ${PORT}`);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
