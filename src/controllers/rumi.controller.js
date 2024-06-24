import { eleminarImagen, subirImagen } from "../libs/cloudinary.js"; // Importa funciones para gestionar imágenes en Cloudinary
import Rumi from "../models/rumi.models.js"; // Importa el modelo de Rumi para interactuar con la base de datos
import Usuario from "../models/user.model.js"; // Importa el modelo de Usuario para interactuar con la base de datos
import fs from "fs-extra"; // Importa fs-extra para gestionar operaciones del sistema de archivos

// Obtener todos los rumis
export const obtenerRumis = async (req, res) => {
  try {
    // Busca todos los rumis
    const rumis = await Rumi.find({}).populate(
      "usuario",
      "nombre apellido email institucion"
    );

    // Devuelve los rumis encontrados
    res.json(rumis);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo rumi
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
    usuario,
  } = req.body;

  try {
    // Verifica si el usuario ya tiene un rumi creado
    const userRum = await Usuario.findById(req.user.id);
    console.log(req.user.id);
    if (userRum.tieneRumi) {
      return res
        .status(404)
        .json({ message: "El usuario ya ha creado un rumi" });
    }

    // Subir imagen a Cloudinary si se proporciona una
    let imagen = null;
    if (req.files?.imagen) {
      const result = await subirImagen(req.files.imagen.tempFilePath);
      await fs.remove(req.files.imagen.tempFilePath); // Elimina el archivo temporal
      imagen = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    // Crea un nuevo objeto Rumi con los datos proporcionados
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

    // Guarda el nuevo rumi en la base de datos
    const guardarRumi = await nuevoRumi.save();

    // Actualiza el estado del usuario para indicar que ya tiene un rumi
    userRum.tieneRumi = true;
    await userRum.save();

    // Devuelve el rumi guardado
    res.json(guardarRumi);
  } catch (error) {
    return res.status(404).json({ message: "Rumi no encontrado" });
  }
};

// Obtener un rumi por ID
export const obtenerRumi = async (req, res) => {
  // Busca el rumi por su ID y llena los campos relacionados del usuario
  const rumi = await Rumi.findById(req.params.id).populate("usuario");
  if (!rumi) return res.status(404).json({ message: "Rumi no encontrado" });

  // Devuelve el rumi encontrado
  res.json(rumi);
};

// Eliminar un rumi por ID
export const eliminarRumi = async (req, res) => {
  try {
    // Busca y elimina el rumi por su ID
    const eleminarRumi = await Rumi.findByIdAndDelete(req.params.id);

    // Elimina la imagen de Cloudinary si existe
    if (eleminarRumi && eleminarRumi.imagen.public_id) {
      await eleminarImagen(eleminarRumi.imagen.public_id);
    }

    // Actualiza el estado del usuario para indicar que ya no tiene un rumi
    const userRum = await Usuario.findById(req.user.id);
    userRum.tieneRumi = false;
    await userRum.save();

    if (!eleminarRumi) return res.sendStatus(404);

    // Devuelve un estado 204 (Sin contenido) si se elimina correctamente
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Rumi no encontrado" });
  }
};

// Actualizar un rumi por ID
export const actualizarRumi = async (req, res) => {
  try {
    // Actualizar imagen a Cloudinary si se proporciona una
    if (req.files?.imagen) {
      const result = await subirImagen(req.files.imagen.tempFilePath);
      await fs.remove(req.files.imagen.tempFilePath); // Elimina el archivo temporal

      req.body.imagen = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    // Actualiza los datos del rumi especificado por su ID
    const actualizarRumi = await Rumi.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Devuelve el documento actualizado
      }
    );

    // Devuelve los datos del rumi actualizado
    return res.json(actualizarRumi);
  } catch (error) {
    return res.status(404).json({ message: "Rumi no encontrado" });
  }
};
