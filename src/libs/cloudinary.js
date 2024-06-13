import { v2 as cloudinary } from "cloudinary"; // Importa la librería de Cloudinary
import { API_KEY, API_SECRET, CLOUD_NAME } from "../config.js"; // Importa las credenciales de configuración

// Configuración de Cloudinary con las credenciales importadas
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

// Función para subir una imagen a Cloudinary
export const subirImagen = async (filePath) => {
  // Sube la imagen al folder 'imagenes' en Cloudinary y devuelve la respuesta
  return await cloudinary.uploader.upload(filePath, {
    folder: "imagenes",
  });
};

// Función para eliminar una imagen de Cloudinary
export const eleminarImagen = async (id) => {
  // Elimina la imagen de Cloudinary utilizando su id y devuelve la respuesta
  return await cloudinary.uploader.destroy(id);
};
