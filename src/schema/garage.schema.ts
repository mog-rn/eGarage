import z from "zod";

export const createGarageSchema = z.object({
  title: z.string().max(256, "Max title length is 256 characters"),
  body: z.string().min(10, "Min body length is 10 characters"),

});


export type CreateGarageInput = z.TypeOf<typeof createGarageSchema>;

export const getSingleGarageSchema = z.object({
    garageId: z.string().uuid(),

})