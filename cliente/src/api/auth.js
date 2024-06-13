import axios from "./axios";

// Funciones para realizar peticiones HTTP utilizando la instancia de Axios configurada

// Función para enviar una solicitud de registro de usuario
export const registroRequest = (user) => axios.post(`/registro`, user);

// Función para enviar una solicitud de inicio de sesión
export const loginRequest = (user) => axios.post(`/login`, user);

// Función para verificar el token del usuario autenticado
export const verificarTokenRequest = () => axios.get("/verificar");

// Función para obtener los detalles de un usuario por su ID
export const obtenerUserRequest = (id) => axios.get(`/perfil/${id}`);

// Función para eliminar un usuario por su ID
export const borrarUserRequest = (id) => axios.delete(`/perfil/${id}`);

// Función para actualizar los detalles de un usuario por su ID
export const actualizarUserRequest = (id, user) =>
  axios.put(`/perfil/${id}`, user);
