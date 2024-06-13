import { TOKEN_SECRETO } from "../config.js"; // Importa la clave secreta para firmar el token desde el archivo de configuración
import jwt from "jsonwebtoken"; // Importa la librería jsonwebtoken para gestionar JWT

// Función para crear un token de acceso
export function crearAccesoToken(payload) {
  return new Promise((resolve, reject) => {
    // Crea un token JWT con el payload proporcionado
    jwt.sign(
      payload, // Datos a incluir en el token
      TOKEN_SECRETO, // Clave secreta para firmar el token
      {
        expiresIn: "1d", // Tiempo de expiración del token (1 día)
      },
      (error, token) => {
        if (error) reject(error); // Rechaza la promesa en caso de error
        resolve(token); // Resuelve la promesa con el token generado
      }
    );
  });
}
