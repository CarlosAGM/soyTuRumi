import { TOKEN_SECRETO } from "../config.js";
import jwt from "jsonwebtoken";

export const authRequerida = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res
      .status(401)
      .json({ message: "No hay token, autorizacion denegada" });
  jwt.verify(token, TOKEN_SECRETO, (err, user) => {
    if (err) return res.status(403).json({ message: "Token invalido" });
    req.user = user;
    next();
  });
};
