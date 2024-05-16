import mongoose, { Schema } from "mongoose";

const rumiEsquema = new mongoose.Schema({
  nombre: {
    type: String,
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
    public_id: String,
  },
  image2: {
    url: String,
    public_id: String,
  },
  image3: {
    url: String,
    public_id: String,
  },
  image4: {
    url: String,
    public_id: String,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

export default mongoose.model("Rumi", rumiEsquema);
