import { Router } from "express";
import { authRequerida } from "../middlewares/validarToken.js";
import {
  obtenerRumis,
  crearRumi,
  obtenerRumi,
  actualizarRumi,
  eliminarRumi,
} from "../controllers/rumi.controller.js";
const rutasRumi = Router();

rutasRumi.get("/Rumis", authRequerida, obtenerRumis);
rutasRumi.get("/Rumis/:id", authRequerida, obtenerRumi);
rutasRumi.post("/Rumis", authRequerida, crearRumi);
rutasRumi.delete("/Rumis/:id", authRequerida, eliminarRumi);
rutasRumi.put("/Rumis/:id", authRequerida, actualizarRumi);

export default rutasRumi;
