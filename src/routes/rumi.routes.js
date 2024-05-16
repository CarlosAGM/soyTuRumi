import { Router } from "express";
import { authRequerida } from "../middlewares/validarToken.js";
import {
  obtenerRumis,
  crearRumi,
  obtenerRumi,
  actualizarRumi,
  eliminarRumi,
} from "../controllers/crearRumi.controller.js";
const rutasRumi = Router();

rutasRumi.get("/Rumi", authRequerida, obtenerRumis);
rutasRumi.get("/Rumi/:id", authRequerida, obtenerRumi);
rutasRumi.post("/Rumi", authRequerida, crearRumi);
rutasRumi.delete("/Rumi/:id", authRequerida, eliminarRumi);
rutasRumi.put("/Rumi/:id", authRequerida, actualizarRumi);

export default rutasRumi;
