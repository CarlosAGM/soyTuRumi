import mongoose, { Schema } from "mongoose";

const rumiEsquema = new mongoose.Schema(
  {
    edad: {
      type: String,
      trim: true,
    },
    genero: {
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
    region: {
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
    imagen: {
      public_id: String,
      url: String,
    },

    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model("Rumi", rumiEsquema);
