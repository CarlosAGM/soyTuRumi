import { z } from "zod";

export const registroEsquema = z.object({
  nombre: z.string({
    required_error: "Nombre Requerido",
  }),
  apellido: z.string({
    required_error: "Apellido Requerido",
  }),
  email: z
    .string({
      required_error: "Email Requerido",
    })
    .email({
      message: "Email Invalido",
    }),
  password: z
    .string({
      required_error: "Contraseña Requerida",
    })
    .min(6, {
      message: "Tu contraseña debe ser de minimo 6 caracteres",
    }),
});

export const loginEsquema = z.object({
  email: z
    .string({
      required_error: "Email Requerido",
    })
    .email({
      message: "Email Invalido",
    }),
  password: z
    .string({
      required_error: "Contraseña Requerida",
    })
    .min(6, {
      message: "Tu contraseña debe ser de minimo 6 caracteres",
    }),
});
