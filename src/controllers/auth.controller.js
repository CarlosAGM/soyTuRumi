import Usuario from "../models/user.model.js"; // Importa el modelo de Usuario para interactuar con la base de datos
import bcrypt from "bcryptjs"; // Biblioteca para cifrar y comparar contraseñas
import { crearAccesoToken } from "../libs/jwt.js"; // Función personalizada para crear tokens JWT
import jwt from "jsonwebtoken"; // Biblioteca para trabajar con JSON Web Tokens
import { TOKEN_SECRETO } from "../config.js"; // Clave secreta para firmar y verificar JWT

// Registro de un nuevo usuario
export const registro = async (req, res) => {
  const { nombre, apellido, email, password, institucion, tieneRumi } =
    req.body;

  try {
    // Verifica si el usuario ya existe en la base de datos
    const usuarioEncontrado = await Usuario.findOne({ email });
    if (usuarioEncontrado) return res.status(400).json(["Email ya existe"]);

    // Cifra la contraseña proporcionada por el usuario
    const cifrado = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario con los datos proporcionados
    const nuevoUsuario = new Usuario({
      nombre,
      apellido,
      email,
      password: cifrado,
      institucion,
      tieneRumi,
    });

    // Guarda el nuevo usuario en la base de datos
    const usuarioGuardado = await nuevoUsuario.save();

    // Genera un token de acceso para el nuevo usuario
    const token = await crearAccesoToken({ id: usuarioGuardado._id });

    // Guarda el token en una cookie
    res.cookie("token", token);

    // Devuelve los datos del usuario guardado
    res.json({
      id: usuarioGuardado._id,
      nombre: usuarioGuardado.nombre,
      apellido: usuarioGuardado.apellido,
      email: usuarioGuardado.email,
      institucion: usuarioGuardado.institucion,
      tieneRumi: usuarioGuardado.tieneRumi,
    });
  } catch (error) {
    console.log(error);
  }
};

// Inicio de sesión de un usuario
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca al usuario por su email
    const userEncontrado = await Usuario.findOne({ email });
    if (!userEncontrado)
      return res.status(400).json({ message: "Usuario no encontrado" });

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const coincide = await bcrypt.compare(password, userEncontrado.password);
    if (!coincide)
      return res.status(400).json({ message: "Contraseña Invalida" });

    // Genera un token de acceso para el usuario autenticado
    const token = await crearAccesoToken({ id: userEncontrado._id });

    // Guarda el token en una cookie
    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
      httpOnly: false,
    });

    // Devuelve los datos del usuario autenticado
    res.json({
      id: userEncontrado._id,
      nombre: userEncontrado.nombre,
      apellido: userEncontrado.apellido,
      email: userEncontrado.email,
      institucion: userEncontrado.institucion,
      tieneRumi: userEncontrado.tieneRumi,
    });
  } catch (error) {
    console.log(error);
  }
};

// Cierre de sesión de un usuario
export const logout = (req, res) => {
  // Elimina el token de la cookie
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

// Obtiene el perfil del usuario autenticado
export const perfil = async (req, res) => {
  // Busca al usuario por su ID
  const userEncontrado = await Usuario.findById(req.user.id);
  if (!userEncontrado)
    return res.status(400).json({ message: "Usuario no encontrado" });

  // Devuelve los datos del usuario encontrado
  return res.json({
    id: userEncontrado._id,
    nombre: userEncontrado.nombre,
    apellido: userEncontrado.apellido,
    email: userEncontrado.email,
    institucion: userEncontrado.institucion,
    tieneRumi: userEncontrado.tieneRumi,
  });
};

// Verifica la validez del token JWT
export const verificarToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No autorizado" });

  // Verifica el token utilizando la clave secreta
  jwt.verify(token, TOKEN_SECRETO, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    // Busca al usuario por su ID contenido en el token
    const userEncontrado = await Usuario.findById(user.id);
    if (!userEncontrado)
      return res.status(401).json({ message: "No autorizado" });

    // Devuelve los datos del usuario encontrado
    return res.json({
      id: userEncontrado._id,
      nombre: userEncontrado.nombre,
      apellido: userEncontrado.apellido,
      email: userEncontrado.email,
      tieneRumi: userEncontrado.tieneRumi,
    });
  });
};

// Actualiza la información de un usuario
export const actualizarUser = async (req, res) => {
  try {
    // Actualiza los datos del usuario especificado por su ID
    const actualizarUser = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Devuelve el documento actualizado
    );

    // Devuelve los datos del usuario actualizado
    return res.json(actualizarUser);
  } catch (error) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
};

// Elimina un usuario
export const eliminarUser = async (req, res) => {
  try {
    // Elimina al usuario especificado por su ID
    const eliminarUser = await Usuario.findByIdAndDelete(req.params.id);
    if (!eliminarUser) return res.sendStatus(404);

    // Devuelve un estado 204 (Sin contenido) si se elimina correctamente
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Rumi no encontrado" });
  }
};
