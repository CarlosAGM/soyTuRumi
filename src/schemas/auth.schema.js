import { z } from "zod";

export const registroEsquema = z.object({
  usuario: z.string({
    required_error: "Usuario Requerido",
  }),
  mail: z
    .string({
      required_error: "Usuario Requerido",
    })
    .email({
      message: "Email Invalido",
    }),
  password: z
    .string({
      required_error: "Contraseña Requerida",
    })
    .min(10, {
      message: "Tu contraseña debe ser de minimo 10 caracteres",
    }),
});

export const loginEsquema = z.object({
  mail: z
    .string({
      required_error: "Usuario Requerido",
    })
    .email({
      message: "Email Invalido",
    }),
  password: z
    .string({
      required_error: "Contraseña Requerida",
    })
    .min(10, {
      message: "Tu contraseña debe ser de minimo 10 caracteres",
    }),
});
