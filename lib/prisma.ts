import { PrismaClient } from "@prisma/client";

// Evita criar múltiplas conexões durante o hot-reload do Next.js
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // Mostra as queries no terminal (bom para debug)
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;