import { eleminarImagen, subirImagen } from "../libs/cloudinary.js";
import Rumi from "../models/rumi.models.js";
import fs from "fs-extra";

export const obtenerRumis = async (req, res) => {
  const rumis = await Rumi.find().populate("usuario", "nombre apellido email");
  res.json(rumis);
};

export const crearRumi = async (req, res) => {
  const {
    edad,
    genero,
    mascotas,
    hijos,
    arriendo,
    region,
    ubicacion,
    celular,
    infoExtra,
  } = req.body;

  let imagen = null;
  if (req.files?.imagen) {
    const result = await subirImagen(req.files.imagen.tempFilePath);
    await fs.remove(req.files.imagen.tempFilePath);
    imagen = {
      url: result.secure_url,
      public_id: result.public_id,
    };
  }

  const nuevoRumi = new Rumi({
    edad,
    genero,
    mascotas,
    hijos,
    arriendo,
    region,
    ubicacion,
    celular,
    infoExtra,
    imagen,
    usuario: req.user.id,
  });
  const guardarRumi = await nuevoRumi.save();
  res.json(guardarRumi);
};

export const obtenerRumi = async (req, res) => {
  const rumi = await Rumi.findById(req.params.id).populate("usuario");
  if (!rumi) return res.status(404).json({ message: "Rumi no encontrado" });
  res.json(rumi);
};

export const eliminarRumi = async (req, res) => {
  try {
    const eleminarRumi = await Rumi.findByIdAndDelete(req.params.id);
    if (eleminarRumi && eleminarRumi.imagen.public_id) {
      await eleminarImagen(eleminarRumi.imagen.public_id);
    }

    if (!eleminarRumi) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Rumi no encontrado" });
  }
};

export const actualizarRumi = async (req, res) => {
  try {
    if (req.files?.imagen) {
      const result = await subirImagen(req.files.imagen.tempFilePath);
      await fs.remove(req.files.imagen.tempFilePath);

      req.body.imagen = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }
    const actualizarRumi = await Rumi.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.json(actualizarRumi);
  } catch (error) {
    return res.status(404).json({ message: "Rumi no encontrado" });
  }
};
