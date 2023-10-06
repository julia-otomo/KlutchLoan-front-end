import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

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

  front_image: z
    .any()
    .refine((files) => files?.length === 0, "Campo obrigatório")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  back_image: z
    .any()
    .refine((files) => files?.length === 0, "Campo obrigatório")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  selfie_image: z
    .any()
    .refine((files) => files?.length === 0, "Campo obrigatório")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
});

export type TRegisterCard = z.infer<typeof registerCardSchema>;
