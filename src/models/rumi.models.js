import mongoose from "mongoose";

const rumiEsquema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  edad: {
    type: String,
    trim: true,
  },
  genero: {
    type: String,
    trim: true,
  },
  institucion: {
    type: String,
    trim: true,
  },
  mascotas: {
    type: String,
    trim: true,
  },
  hijos: {
    type: String,
    trim: true,
  },
  arriendo: {
    type: String,
    trim: true,
  },
  ubicacion: {
    type: String,
    trim: true,
  },
  celular: {
    type: String,
    trim: true,
  },
  infoExtra: {
    type: String,
    trim: true,
  },
  image1: {
    url: String,
    public_id: string,
  },
  image2: {
    url: String,
    public_id: string,
  },
  image3: {
    url: String,
    public_id: string,
  },
  image4: {
    url: String,
    public_id: string,
  },
});

export default mongoose.model("Rumi", rumiEsquema);
