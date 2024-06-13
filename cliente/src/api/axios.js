import axios from "axios";

// Creamos una instancia de Axios con configuraciones predefinidas
const instance = axios.create({
  baseURL: "http://localhost:4000/api", // URL base para todas las peticiones hacia el backend
  withCredentials: true, // Permitir el intercambio de cookies entre orígenes
});

// Exportar la instancia configurada para usarla en otros archivos
export default instance;
