import Usuario from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { crearAccesoToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRETO } from "../config.js";

export const registro = async (req, res) => {
  const { nombre, apellido, email, password, institucion } = req.body;

  try {
    const usuarioEncontrado = await Usuario.findOne({ email });
    if (usuarioEncontrado) return res.status(400).json(["Email ya existe"]);
    const cifrado = await bcrypt.hash(password, 10);

    const nuevoUsuario = new Usuario({
      nombre,
      apellido,
      email,
      password: cifrado,
      institucion,
    });

    const usuarioGuardado = await nuevoUsuario.save();
    const token = await crearAccesoToken({ id: usuarioGuardado._id });
    res.cookie("token", token);
    res.json({
      id: usuarioGuardado._id,
      nombre: usuarioGuardado.nombre,
      apellido: usuarioGuardado.apellido,
      email: usuarioGuardado.email,
      institucion: usuarioGuardado.institucion,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userEncontrado = await Usuario.findOne({ email });
    if (!userEncontrado)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const coincide = await bcrypt.compare(password, userEncontrado.password);

    if (!coincide)
      return res.status(400).json({ message: "Contraseña Invalida" });

    const token = await crearAccesoToken({ id: userEncontrado._id });

    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
      httpOnly: false,
    });
    res.json({
      id: userEncontrado._id,
      nombre: userEncontrado.nombre,
      apellido: userEncontrado.apellido,
      email: userEncontrado.email,
      institucion: userEncontrado.institucion,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const perfil = async (req, res) => {
  const userEncontrado = await Usuario.findById(req.user.id);
  if (!userEncontrado)
    return res.status(400).json({ message: "Usuario no encontrado" });
  return res.json({
    id: userEncontrado._id,
    nombre: userEncontrado.nombre,
    apellido: userEncontrado.apellido,
    email: userEncontrado.email,
    institucion: userEncontrado.institucion,
  });
};

export const verificarToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No autorizado" });
  jwt.verify(token, TOKEN_SECRETO, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });
    const userEncontrado = await Usuario.findById(user.id);
    if (!userEncontrado)
      return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userEncontrado._id,
      nombre: userEncontrado.nombre,
      apellido: userEncontrado.apellido,
      email: userEncontrado.email,
    });
  });
};

export const actualizarUser = async (req, res) => {
  try {
    const actualizarUser = await Rumi.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.json(actualizarUser);
  } catch (error) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
};

export const eliminarUser = async (req, res) => {
  try {
    const eliminarUser = await Rumi.findByIdAndDelete(req.params.id);

    if (!eliminarUser) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Rumi no encontrado" });
  }
};
