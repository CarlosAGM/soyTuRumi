import axios from "./axios";

export const obtenerRumisRequest = () => axios.get("/Rumis");
export const obtenerRumiRequest = (id) => axios.get(`/Rumis/${id}`);
export const crearRumiRequest = (rumi) => axios.post("/Rumis", rumi);
export const actualizarRumiRequest = (id, rumi) =>
  axios.put(`/Rumis/${id}`, rumi);
export const borrarRumiRequest = (id) => axios.delete(`/Rumis/${id}`);
