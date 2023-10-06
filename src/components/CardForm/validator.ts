import { z } from "zod";

export const registerCardSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  card_number: z
    .string()
    .min(1, "Campo obrigatório")
    .max(16, "O máximo de caracteres é 16"),

  expiration_date: z
    .string()
    .min(1, "Campo obrigatório")
    .max(5, "O máximo de caracteres é 5"),

  cvv: z
    .string()
    .min(1, "Campo obrigatório")
    .max(4, "O máximo de caracteres é 4"),
});

export type TRegisterCard = z.infer<typeof registerCardSchema>;
