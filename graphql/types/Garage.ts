import { objectType, extendType } from 'nexus';
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
