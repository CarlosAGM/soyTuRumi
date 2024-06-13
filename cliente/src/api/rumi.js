import axios from "./axios";

// Funciones para realizar peticiones HTTP utilizando la instancia de Axios configurada

// Función para obtener todos los Rumis
export const obtenerRumisRequest = () => axios.get("/Rumis");

// Función para obtener un Rumi específico por su ID
export const obtenerRumiRequest = (id) => axios.get(`/Rumis/${id}`);

// Función para crear un nuevo Rumi
export const crearRumiRequest = (rumi) => {
  const form = new FormData();
  // Itera sobre las propiedades de 'rumi' y las agrega al FormData
  for (let key in rumi) {
    form.append(key, rumi[key]);
  }
  // Retorna la promesa de la petición POST
  return axios.post("/Rumis", form, {
    headers: {
      "Content-Type": "multipart/form-data", // Especifica el tipo de contenido
    },
  });
};

// Función para actualizar un Rumi existente por su ID
export const actualizarRumiRequest = (id, rumi) => {
  const form = new FormData();
  // Itera sobre las propiedades de 'rumi' y las agrega al FormData
  for (let key in rumi) {
    form.append(key, rumi[key]);
  }
  // Retorna la promesa de la petición PUT
  return axios.put(`/Rumis/${id}`, form, {
    headers: {
      "Content-Type": "multipart/form-data", // Especifica el tipo de contenido
    },
  });
};

// Función para eliminar un Rumi por su ID
export const borrarRumiRequest = (id) => axios.delete(`/Rumis/${id}`);
