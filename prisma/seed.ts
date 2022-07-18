import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.users.create({
    data: {
      firstname: 'Admin',
      email: 'admin@gmail.com',
      password: 'admin',
      role: 'ADMIN',
    },
  });

  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
