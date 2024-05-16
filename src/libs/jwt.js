import { TOKEN_SECRETO } from "../config.js";
import jwt from "jsonwebtoken";
export function crearAccesoToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRETO,
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
}
