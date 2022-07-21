import { prisma } from '../../lib/prisma';

(async () => {
  await prisma.users.deleteMany();
})();

export {};
