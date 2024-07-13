import { Router } from "express"; // Importa Router de Express para definir rutas

// Importa las funciones del controlador de autenticación
import {
  registro,
  login,
  logout,
  perfil,
  verificarToken,
  actualizarUser,
  eliminarUser,
} from "../controllers/auth.controller.js";

// Importa el middleware para requerir autenticación
import { authRequerida } from "../middlewares/validarToken.js";

// Importa el middleware para validar esquemas y los esquemas de validación
import { validarEsquema } from "../middlewares/validarEsquemas.middlewares.js";
import { registroEsquema, loginEsquema } from "../schemas/auth.schema.js";

const rutas = Router(); // Crea una instancia de Router

// Rutas de autenticación
rutas.post("/registro", validarEsquema(registroEsquema), registro); // Ruta para registro de usuarios con validación de esquema
rutas.post("/login", validarEsquema(loginEsquema), login); // Ruta para login de usuarios con validación de esquema
rutas.post("/logout", logout); // Ruta para logout de usuarios
rutas.get("/verificar", verificarToken); // Ruta para verificar el token de autenticación
rutas.get("/perfil/:id", authRequerida, perfil); // Ruta para obtener el perfil de usuario, requiere autenticación
rutas.put("/perfil/:id", authRequerida, actualizarUser); // Ruta para actualizar el perfil de usuario, requiere autenticación
rutas.delete("/perfil/:id", authRequerida, eliminarUser); // Ruta para eliminar el perfil de usuario, requiere autenticación

export default rutas; // Exporta el router para usarlo en otras partes de la aplicación
