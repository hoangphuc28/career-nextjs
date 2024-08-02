import { z } from "zod";

export const schema = z.object({
    firstName: z.string().trim().min(1, {message: 'First name is required.'}),
    lastName: z.string().trim().min(1, {message: 'Last name is required.'}),
    email:  z.string().trim().min(1, {message: 'Email is invalid.'}),
    prefix: z.string().trim().min(1, { message: 'Prefix is required.' }),
    phoneNumber: z.string().trim().min(1, { message: 'Mobile phone number is required.' })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: 'Phone number is invalid.' }),
  });