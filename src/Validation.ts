import { z } from "zod";

export const Schema= z.object({
  firstName: z
    .string()
    .min(3),
  lastName: z
    .string()
    .min(5),
  email: z
    .string()
    .refine(
      (value) => /\S+@\S+\.\S+/.test(value), "Enter the valid email form"
    ),
  phoneNumber: z
    .string()
    .refine(
      (value) => /[1-9]/g.test(value), "Phone number must only contain numbers"
    )
    .refine(
      (value) => /^09/.test(value), "Phone number must start with 09"
    )
    .refine(
      (value) => /^09\d{9}$/.test(value), "Phone number must contain 11 numbers"
    ),
  homeNumber: z
    .string()
    .refine(
      (value) => /[1-9]/g.test(value), "Home number must only contain numbers"
    )
    .refine(
      (value) => /^0/.test(value), "Home number must start with 0"
    )
    .refine(
      (value) => /^0\d{2}-\d{8}/.test(value), "Home number must contain 11 numbers"
    ),
  address: z
    .string()
    .min(15),
  radio: z
  .enum(["Ascending", "Descending"])
})