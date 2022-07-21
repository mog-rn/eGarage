import { extendType, objectType } from 'nexus';

export const createAccount = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createAccount', {
      type: RegisterResponse,
      args: {
        // credentials: Credentials,
      },
    });
  },
});

const Credentials = objectType({
  name: 'Credentials',
  definition(t) {
    t.nonNull.string('email');
    t.nonNull.string('password');
  },
});

const RegisterResponse = objectType({
  name: 'RegisterResponse',
  definition(t) {
    t.boolean('success');
    t.string('message');
  },
});
