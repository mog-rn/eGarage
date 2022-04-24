import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: user,
      },
    });
  } catch (err) {
    return res.status(503).json({ err: err.message });
  }
};
