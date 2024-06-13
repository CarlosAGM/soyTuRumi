import { TOKEN_SECRETO } from "../config.js"; // Importa la clave secreta para verificar el token desde el archivo de configuración
import jwt from "jsonwebtoken"; // Importa la librería jsonwebtoken para gestionar JWT

// Middleware para requerir autenticación
export const authRequerida = (req, res, next) => {
  const { token } = req.cookies; // Extrae el token de las cookies de la solicitud
  if (!token) {
    // Si no hay token, responde con un error 401 (no autorizado)
    return res
      .status(401)
      .json({ message: "No hay token, autorización denegada" });
  }
  // Verifica el token utilizando la clave secreta
  jwt.verify(token, TOKEN_SECRETO, (err, user) => {
    if (err) {
      // Si el token es inválido, responde con un error 403 (prohibido)
      return res.status(403).json({ message: "Token inválido" });
    }
    // Si el token es válido, añade la información del usuario al objeto de la solicitud
    req.user = user;
    // Llama a next() para pasar al siguiente middleware o ruta
    next();
  });
};
