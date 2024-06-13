import app from "./app.js"; // Importamos la instancia de la aplicación Express desde el archivo app.js
import { conexionDB } from "./db.js"; // Importamos la función para conectar a la base de datos desde el archivo db.js
import { PUERTO } from "./config.js"; // Importamos la constante PUERTO desde el archivo de configuración config.js

conexionDB(); // Llamamos a la función para establecer la conexión a la base de datos
app.listen(PUERTO); // Iniciamos el servidor Express en el puerto especificado
console.log("Servidor arriba en el puerto: ", PUERTO);
