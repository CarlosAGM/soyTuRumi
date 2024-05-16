import app from "./app.js";
import { conexionDB } from "./db.js";
import { PUERTO } from "./config.js";

conexionDB();

app.listen(PUERTO);
console.log("Servidor arriba en el puerto: ", PUERTO);
