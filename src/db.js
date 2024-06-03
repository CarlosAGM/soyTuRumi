import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const conexionDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Conectado a la Base de Datos");
  } catch (error) {
    console.log(error);
  }
};
