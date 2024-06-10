import mongoose from "mongoose"; // Importamos la dependencia mongoose para interactuar con MongoDB
import { MONGODB_URI } from "./config.js"; // Importamos la URI de conexión a MongoDB desde la configuración

// Definimos una función asíncrona para establecer la conexión a la base de datos
export const conexionDB = async () => {
  try {
    // Conectamos la base de datos usando la URI proporcionada
    await mongoose.connect(MONGODB_URI);
    // Si la conexión es exitosa, mostramos un mensaje en la consola
    console.log("Conectado a la Base de Datos");
  } catch (error) {
    console.log(error);
  }
};
