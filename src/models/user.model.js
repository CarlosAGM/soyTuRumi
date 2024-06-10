import mongoose from "mongoose";

const usuarioEsquema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  institucion: {
    type: String,
    trim: true,
  },
  tieneRumi: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Usuario", usuarioEsquema);
