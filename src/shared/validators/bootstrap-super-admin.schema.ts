import { z } from "zod";

export const bootstrapSuperAdminSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .transform((v) => v.trim()),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .transform((v) => v.trim()),

  email: z
    .string()
    .email("Invalid email")
    .transform((v) => v.toLowerCase().trim()),

  password: z.string().min(6, "Password must be at least 6 characters"),
});
