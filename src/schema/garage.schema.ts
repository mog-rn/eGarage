import z from "zod";

export const createGarageSchema = z.object({
  name: z.string(),
  city: z.string(),
  country: z.string(),
  phone: z.string(),
  email: z.string(),
  website: z.string(),
  description: z.string().min(20),
  services: z.string(),
  image: z.string(),
  time_open: z.string(),
  time_close: z.string(),
  // lat: z.number(),
  // lng: z.number(),
});

export type CreateGarageInput = z.TypeOf<typeof createGarageSchema>;

export const getSingleGarageSchema = z.object({
  garageId: z.string(),
});
