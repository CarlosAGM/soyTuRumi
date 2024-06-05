import axios from "./axios";

export const obtenerRumisRequest = () => axios.get("/Rumis");
export const obtenerRumiRequest = (id) => axios.get(`/Rumis/${id}`);
// export const crearRumiRequest = (rumi) => axios.post("/Rumis", rumi);

export const crearRumiRequest = (rumi) => {
  const form = new FormData();
  for (let key in rumi) {
    form.append(key, rumi[key]);
  }
  axios.post("/Rumis", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const actualizarRumiRequest = (id, rumi) => {
  const form = new FormData();
  for (let key in rumi) {
    form.append(key, rumi[key]);
  }

  axios.put(`/Rumis/${id}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const borrarRumiRequest = (id) => axios.delete(`/Rumis/${id}`);
