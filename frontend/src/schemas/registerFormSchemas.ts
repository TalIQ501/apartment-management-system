import { z } from "zod";

export const registerUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerPersonSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Second last name is required"),
  date_of_birth: z.string().optional(),
  identity_no: z.string().length(13, "CNIC must be 13 digits"),
  contact_1: z.string().min(10, "Enter a valid contact number"),
  contact_2: z.string().min(10, "Enter a valid contact number").optional(),
});
