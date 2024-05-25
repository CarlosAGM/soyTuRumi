import Rumi from "../models/rumi.models.js";

export const obtenerRumis = async (req, res) => {
  const rumis = await Rumi.find();
  res.json(rumis);
};

export const crearRumi = async (req, res) => {
  const {
    nombre,
    edad,
    genero,
    institucion,
    mascotas,
    hijos,
    arriendo,
    ubicacion,
    celular,
    image1,
    image2,
    image3,
    image4,
  } = req.body;

  const nuevoRumi = new Rumi({
    nombre,
    edad,
    genero,
    institucion,
    mascotas,
    hijos,
    arriendo,
    ubicacion,
    celular,
    image1,
    image2,
    image3,
    image4,
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
  const eleminarRumi = await Rumi.findByIdAndDelete(req.params.id);
  if (!eleminarRumi)
    return res.status(404).json({ message: "Rumi no encontrado" });
  return res.sendStatus(204);
};

export const actualizarRumi = async (req, res) => {
  const actualizarRumi = await Rumi.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!actualizarRumi)
    return res.status(404).json({ message: "Rumi no encontrado" });
  res.json(actualizarRumi);
};
