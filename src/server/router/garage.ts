import { createRouter } from "./context";

export const garageRouter = createRouter()
    .mutation('create-garage', {})
    .query('garages', {})
    .query('single-garage', {})