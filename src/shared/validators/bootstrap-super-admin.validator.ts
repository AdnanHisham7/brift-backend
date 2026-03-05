import { Request } from "express";
import { ValidationError } from "@/domain/errors/validation-error";

export const validateBootstrapSuperAdmin = (req: Request) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || firstName.trim() === "") {
    throw new ValidationError("First name is required");
  }

  if (!lastName || lastName.trim() === "") {
    throw new ValidationError("Last name is required");
  }

  if (!email || email.trim() === "") {
    throw new ValidationError("Email is required");
  }

  if (!password || password.trim() === "") {
    throw new ValidationError("Password is required");
  }

  return {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim().toLowerCase(),
    password,
  };
};
