import z from "zod";

export const createGarageOwnerSchema = z.object({
  username: z.string(),
  email: z.string().email(),
});

export const createGarageOwnerOutputSchema = z.object({
  username: z.string(),
  email: z.string().email(),
});

export type CreateGarageOwnerInput = z.TypeOf<typeof createGarageOwnerSchema>;

export const requestOtpSchema = z.object({
  email: z.string().email(),
  redirect: z.string().default("/"),
});

export type RequestOtpInput = z.TypeOf<typeof requestOtpSchema>;

export const verifyOtpSchema = z.object({
  hash: z.string(),
});
