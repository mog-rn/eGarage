import { extendType, objectType } from 'nexus';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { APP_SECRET } from '../utils/auth';

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t: any) {
    t.nonNull.string('token');
    t.nonNull.field('user', {
      type: 'User',
    });
  },
});

export const AuthMutation = extendType({
  type: 'Mutation',
  definition(t: any) {
    t.nonNull.field('signup', {
      type: AuthPayload,
      args: {
        firstname: 'string',
        lastname: 'string',
        email: 'string',
        password: 'string',
        profileimg: 'string',
        role: 'string',
      },
      async resolve(_parent: any, args: any, ctx: any) {
        const { firstname, lastname, email, profileimg, role } = args;

        const password = await bcrypt.hash(args.password, 10);

        const user = await ctx.prisma.users.create({
          data: {
            firstname,
            lastname,
            email,
            password,
            profileimg,
            role,
          },
        });

        const token = jwt.sign(
          {
            user_id: user.user_id,
          },
          APP_SECRET
        );
        return {
          token,
          user,
        };
      },
    });
    t.nonNull.field('login', {
        type: AuthPayload,
        args: {
            email: 'string',
            password: 'string',
        },
        async resolve(_parent: any, args: any, ctx: any) {
            const user = await ctx.prisma.users.findUnique({
                where: {
                    email: args.email,
                },
            });
            if (!user) {
                throw new Error('No such user found');
            }
            const valid = await bcrypt.compare(args.password, user.password);
            if (!valid) {
                throw new Error('Invalid password');
            }
            const token = jwt.sign(
                {
                    user_id: user.user_id,
                },
                APP_SECRET
            );
            return {
                token,
                user,
            };
        }
    });
  },
});
