import mongoose from "mongoose";

const url =
  "mongodb+srv://gonzagamenara:yoDVhYxam3FEhXrs@cluster0.lcnbabp.mongodb.net/hearo?retryWrites=true&w=majority&appName=Cluster0";

export async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Base de datos conectada corectamente");
  } catch (error) {
    console.error("Error al conectar con base de datos", error);
    process.exit(1);
  }
}
