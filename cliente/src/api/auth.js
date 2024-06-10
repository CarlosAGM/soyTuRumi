import axios from "./axios";

export const registroRequest = (user) => axios.post(`/registro`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verificarTokenRequest = () => axios.get("/verificar");

export const obtenerUserRequest = (id) => axios.get(`/perfil/${id}`);

export const borrarUserRequest = (id) => axios.delete(`/perfil/${id}`);

export const actualizarUserRequest = (id, user) =>
  axios.put(`/perfil/${id}`, user);
