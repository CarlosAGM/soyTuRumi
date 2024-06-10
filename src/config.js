import dotenv from "dotenv"; // Importamos la dependencia dotenv para manejar variables de entorno

dotenv.config();

// Exportamos las constantes con las configuraciones que usará nuestra aplicación
// TOKEN_SECRETO: Se utiliza para la firma y verificación de tokens
export const TOKEN_SECRETO = process.env.TOKEN_SECRETO;

// PUERTO: El puerto en el que correrá el servidor, por defecto 4000 si no se especifica en el .env
export const PUERTO = process.env.PUERTO || 4000;

// MONGODB_URI: La URI de conexión a la base de datos MongoDB, por defecto "mongodb://localhost/soyturumi" si no se especifica en el .env
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/soyturumi";

// ACCESOS A LA API DE CLOUDINARY
export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;
