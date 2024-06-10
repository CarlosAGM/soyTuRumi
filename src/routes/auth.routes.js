import { Router } from "express";

import {
  registro,
  login,
  logout,
  perfil,
  verificarToken,
  actualizarUser,
  eliminarUser,
} from "../controllers/auth.controller.js";
import { authRequerida } from "../middlewares/validarToken.js";
import { validarEsquema } from "../middlewares/validarEsquemas.middlewares.js";
import { registroEsquema, loginEsquema } from "../schemas/auth.schema.js";

const rutas = Router();

rutas.post("/registro", validarEsquema(registroEsquema), registro);
rutas.post("/login", validarEsquema(loginEsquema), login);
rutas.post("/logout", logout);
rutas.get("/verificar", verificarToken);
rutas.get("/perfil/:id", authRequerida, perfil);
rutas.put("/perfil/:id", authRequerida, actualizarUser);
rutas.delete("/perfil/:id", authRequerida, eliminarUser);

export default rutas;
