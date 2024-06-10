import express from "express"; // Framework para construir el servidor web
import morgan from "morgan"; // Middleware para registrar solicitudes HTTP en la consola
import cookieParser from "cookie-parser"; // Middleware para analizar cookies en las solicitudes
import cors from "cors"; // Middleware para habilitar Cross-Origin Resource Sharing (CORS)
import fileUpload from "express-fileupload"; // Middleware para manejar la subida de archivos

// Importamos nuestras rutas personalizadas
import authRutas from "./routes/auth.routes.js"; // Rutas relacionadas con la autenticación
import rumiRutas from "./routes/rumi.routes.js"; // Otras rutas personalizadas (probablemente relacionadas con "rumis")

// Creamos una instancia de una aplicación Express
const app = express();

// Configuramos CORS para permitir solicitudes desde el origen especificado
app.use(
  cors({
    origin: "http://localhost:5173", // Dominio permitido para hacer solicitudes al frontEnd
    credentials: true, // Permitir el envío de cookies y cabeceras de autenticación
  })
);

// Configuramos Morgan para registrar las solicitudes HTTP en la consola
app.use(morgan("dev")); // Modo de desarrollo para obtener detalles de las solicitudes

// Configuramos Express para analizar los cuerpos de las solicitudes en formato JSON
app.use(express.json()); // Analiza las solicitudes con contenido JSON

// Configuramos el analizador de cookies para manejar las cookies en las solicitudes
app.use(cookieParser()); // Permite el acceso y manipulación de cookies

// Configuramos la subida de iamgenes
app.use(
  fileUpload({
    tempFileDir: "./imagenes", // Directorio temporal para almacenar imagenes
    useTempFiles: true, // Utilizar archivos temporales durante la subida
  })
);

// Definimos las rutas de nuestra API
app.use("/api", authRutas); // Rutas relacionadas con la autenticación
app.use("/api", rumiRutas); // Rutas realacionadas relacionadas con rumis

// Exportamos la instancia de la aplicación para usarla en otros archivos
export default app;
