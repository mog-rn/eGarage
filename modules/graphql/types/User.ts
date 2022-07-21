import { GraphQLDateTime } from 'graphql-iso-date';
import { asNexusMethod, enumType, extendType, objectType } from 'nexus';
import { Garage } from './Garage';

export const User = objectType({
  name: 'User',
  definition(t: any) {
    t.int('user_id');
    t.string('firstname');
    t.string('lastname');
    t.string('email');
    t.string('password');
    t.string('profileimg');
    t.string('role', { type: Role });
    t.string('created_at', { type: 'DateTime' });
    // t.field('garage', {
    //   type: Garage,
    //   async resolve(_parent: any, _args: any, ctx: any) {
    //     return await ctx.prisma.users.findUnique({
    //       where: {
    //         garage_id: _parent.garage_id,
    //       },
    //     }).garage();
    //   },
    // });
  },
});

const Role = enumType({
  name: 'Role',
  members: ['ADMIN', 'AUTOMOBILE_USER', 'GARAGE_OWNER'],
});

export const DateTime = asNexusMethod(GraphQLDateTime, 'date');

export const UserQuery = extendType({
  type: 'Query',
  definition(t: any) {
    t.nonNull.list.field('users', {
      type: User,
      async resolve(_parent: any, _args: any, ctx: any) {
        return await ctx.prisma.Users.findMany();
      }, // getUsers
    });
  },
});
