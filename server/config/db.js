import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.DB_SECRET;

export async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Base de datos conectada corectamente");
  } catch (error) {
    console.error("Error al conectar con base de datos", error);
    process.exit(1);
  }
}
