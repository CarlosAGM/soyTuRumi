import { Router } from "express";

import {
  registro,
  login,
  logout,
  perfil,
} from "../controllers/auth.controller.js";
import { authRequerida } from "../middlewares/validarToken.js";

const rutas = Router();

rutas.post("/registro", registro);
rutas.post("/login", login);
rutas.post("/logout", logout);
rutas.get("/perfil", authRequerida, perfil);

export default rutas;
