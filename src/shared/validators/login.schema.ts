import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email")
    .transform((v) => v.toLowerCase().trim()),

  password: z.string().min(1, "Password is required"),
});
