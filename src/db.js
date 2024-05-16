import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const conexionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado a la Base de Datos");
  } catch (error) {
    console.log(error);
  }
};
