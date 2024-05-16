export const validarEsquema = (esquema) => (req, res, next) => {
  try {
    esquema.parse(req.body);
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: error.errors.map((error) => error.message) });
  }
};
