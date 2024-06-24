import { Router } from "express";
import { authRequerida } from "../middlewares/validarToken.js";
import { verificarToken } from "../controllers/auth.controller.js";
import {
  obtenerRumis,
  crearRumi,
  obtenerRumi,
  actualizarRumi,
  eliminarRumi,
} from "../controllers/rumi.controller.js";
const rutasRumi = Router();

// Ruta para obtener todos los Rumis
rutasRumi.get("/Rumis", authRequerida, obtenerRumis);

// Ruta para obtener un Rumi específico por su ID
rutasRumi.get("/Rumis/:id", authRequerida, obtenerRumi);

// Ruta para crear un nuevo Rumi
rutasRumi.post("/Rumis", authRequerida, crearRumi);

// Ruta para eliminar un Rumi específico por su ID
rutasRumi.delete("/Rumis/:id", authRequerida, eliminarRumi);

// Ruta para actualizar un Rumi específico por su ID
rutasRumi.put("/Rumis/:id", authRequerida, actualizarRumi);

export default rutasRumi;
