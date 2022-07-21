import { contextType } from 'google-map-react';

export const resolvers = {
  Query: {
    garages: (_parent: any, _args: any, ctx: any) => {
      return ctx.prisma.garage.findMany();
    }, // getGarages
  },
};
