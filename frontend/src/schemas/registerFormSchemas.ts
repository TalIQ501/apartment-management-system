import { z } from "zod";

export const registerUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerBasePersonSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Second last name is required"),
  date_of_birth: z.string().optional(),
  identity_no: z.string().length(13, "CNIC must be 13 digits"),
  contact_1: z.string().min(10, "Enter a valid contact number"),
  contact_2: z.string().min(10, "Enter a valid contact number").optional(),
  father_id: z.string().optional(),
  mother_id: z.string().optional(),
  guardian_id: z.string().optional(),
});



export const registerParentSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Second last name is required"),
  date_of_birth: z.string().optional(),
  identity_no: z.string().length(13, "CNIC must be 13 digits"),
  contact_1: z.string().min(10, "Enter a valid contact number"),
  contact_2: z.string().min(10, "Enter a valid contact number").optional(),
  father_id: z.string().optional(),
  mother_id: z.string().optional(),
  guardian_id: z.string().optional(),
});

export const registerGuardianSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Second last name is required"),
  date_of_birth: z.string().optional(),
  identity_no: z.string().length(13, "CNIC must be 13 digits"),
  contact_1: z.string().min(10, "Enter a valid contact number"),
  contact_2: z.string().min(10, "Enter a valid contact number").optional(),
  father_id: z.string().optional(),
  mother_id: z.string().optional(),
  guardian_id: z.string().optional(),
});

export const registerRelativeInfoSchema = z.object({
  father: registerParentSchema.partial(),
  mother: registerParentSchema.partial(),
  guardian: registerGuardianSchema.partial(),
})

// export const registerCompleteSchema = z.object(
//   {
//   person: registerBasePersonSchema,
//   background_relatives: {
//     father: registerParentSchema.optional(),
//     mother: registerParentSchema.optional(),
//     guardian: registerGuardianSchema.optional(),
//   },
//   user: registerUserSchema,
//   check: z.object({
    
//   })
// }
// ).superRefine
