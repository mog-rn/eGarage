import { enumType, extendType, objectType } from 'nexus';
import { Garage } from './Garage';

export const User = objectType({
  name: 'User',
  definition(t: any) {
    t.string('user_id');
    t.string('firstname');
    t.string('lastname');
    t.string('email');
    t.string('password');
    t.string('profileimg');
    t.string('user_description');
    t.string('role', { type: Role });
    t.string('user_created_at');
    t.field('garage', {
      type: Garage,
      async resolve(_parent: any, _args: any, ctx: any) {
        return await ctx.prisma.user.findUnique({
          where: {
            email: _parent.user_email,
          },
        });
      },
    });
  },
});

const Role = enumType({
  name: 'Role',
  members: ['ADMIN', 'AUTOMOBILE_USER', 'GARAGE_OWNER'],
});


export const UserQuery = extendType({
    type: 'Query',
    definition(t: any) {
        t.nonNull.list.field('users', {
            type: User,
            async resolve(_parent: any, _args: any, ctx: any) {
                return await ctx.prisma.Users.findMany();
            } // getUsers
        });
    }
}
);