// La función validarEsquema que valida el cuerpo de la solicitud según el esquema proporcionado
export const validarEsquema = (esquema) => (req, res, next) => {
  try {
    // Intenta validar el cuerpo de la solicitud con el esquema proporcionado
    esquema.parse(req.body);
    // Si la validación es exitosa, pasa al siguiente middleware
    next();
  } catch (error) {
    // Si ocurre un error de validación, devuelve un error 400 con los mensajes de error
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};
