import Usuario from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { crearAccesoToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRETO } from "../config.js";

export const registro = async (req, res) => {
  const { usuario, mail, password, institucion } = req.body;

  try {
    const usuarioEncontrado = await Usuario.findOne({ mail });
    if (usuarioEncontrado) return res.status(400).json(["Email ya existe"]);
    const cifrado = await bcrypt.hash(password, 10);

    const nuevoUsuario = new Usuario({
      usuario,
      mail,
      password: cifrado,
      institucion,
    });

    const usuarioGuardado = await nuevoUsuario.save();
    const token = await crearAccesoToken({ id: usuarioGuardado._id });
    res.cookie("token", token);
    res.json({
      id: usuarioGuardado._id,
      usuario: usuarioGuardado.usuario,
      mail: usuarioGuardado.mail,
      institucion: usuarioGuardado.institucion,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { mail, password } = req.body;

  try {
    const userEncontrado = await Usuario.findOne({ mail });
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
      usuario: userEncontrado.usuario,
      mail: userEncontrado.mail,
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
    usuario: userEncontrado.usuario,
    mail: userEncontrado.mail,
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
      usuario: userEncontrado.usuario,
      mail: userEncontrado.mail,
    });
  });
};
