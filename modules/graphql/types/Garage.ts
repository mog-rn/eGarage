import { objectType, extendType, nonNull, stringArg } from 'nexus';
import { User } from './User';

export const Garage = objectType({
  name: 'Garage',
  definition(t) {
    t.string('garage_id');
    t.string('garage_name');
    t.string('garage_services');
    t.string('garage_location');
    t.string('garage_phone');
    t.string('garage_email');
    t.string('garage_website');
    t.string('time_open');
    t.string('time_close');
    t.string('garage_image');
    t.string('garage_description');
    t.list.field('users', {
      type: User,
      async resolve(_parent: any, _args: any, ctx: any) {
        return await ctx.prisma.user.findUnique({
          where: {
            email: _parent.garage_email,
          },
        });
      }, // getUsers
    });
    t.string('created_at');
  },
});

export const GarageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('garages', {
      type: Garage,
      async resolve(_parent: any, _args: any, ctx: any) {
        return await ctx.prisma.garages.findMany();
      }, // getGarages
    });
  },
});

export const Edge = objectType({
  name: 'Edge',
  definition(t) {
    t.string('cursor');
    t.field('node', {
      type: Garage,
    });
  },
});

export const PageInfo = objectType({
  name: 'PageInfo',
  definition(t) {
    t.string('endCursor');
    t.boolean('hasNextPage');
  },
});

export const Response = objectType({
  name: 'Response',
  definition(t) {
    t.field('pageInfo', {
      type: PageInfo,
    });
    t.field('edges', {
      type: Edge,
    });
  },
});

export const CreateGarageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createGarage', {
      type: Garage,
      args: {
        garage_name: nonNull(stringArg()),
        garage_services: nonNull(stringArg()),
        garage_location: nonNull(stringArg()),
        garage_phone: nonNull(stringArg()),
        garage_email: nonNull(stringArg()),
        garage_website: nonNull(stringArg()),
        time_open: nonNull(stringArg()),
        time_close: nonNull(stringArg()),
        garage_image: nonNull(stringArg()),
        garage_description: nonNull(stringArg()),
      },

      async resolve(_parent, args, ctx) {
        if (!ctx.user) {
          throw new Error(
            'You must be logged in as an Admin or Garage Owner to perform this action.'
          );
        }

        const newGarage = {
          garage_name: args.garage_name,
          garage_services: args.garage_services,
          garage_location: args.garage_location,
          garage_phone: args.garage_phone,
          garage_email: args.garage_email,
          garage_website: args.garage_website,
          time_open: args.time_open,
          time_close: args.time_close,
          garage_image: args.garage_image,
          garage_description: args.garage_description,
        };

        return await ctx.prisma.garages.create({
          data: newGarage,
        });
      },
    });
  },
});
