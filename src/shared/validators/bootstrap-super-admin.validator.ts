import { Request } from "express";

export const validateBootstrapSuperAdmin = (req: Request) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || firstName.trim() === "") {
    throw new Error("First name is required");
  }

  if (!lastName || lastName.trim() === "") {
    throw new Error("Last name is required");
  }

  if (!email || email.trim() === "") {
    throw new Error("Email is required");
  }

  if (!password || password.trim() === "") {
    throw new Error("Password is required");
  }

  return {
    firstName,
    lastName,
    email,
    password,
  };
};
