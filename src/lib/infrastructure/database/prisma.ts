import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../../../prisma/generated/prisma/client';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

/**
 * Crée le client Prisma avec l'adapter PostgreSQL.
 */
function createPrismaClient(): PrismaClient {
    const connectionString = import.meta.env.DATABASE_URL;

    const pool = new Pool({
        connectionString,
        ssl: {
            rejectUnauthorized: false,
        },
    });

    const adapter = new PrismaPg(pool);

    return new PrismaClient({ adapter });
}

/**
 * Client Prisma singleton pour la connexion à la base de données.
 * Évite la création de multiples connexions en développement.
 */
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (import.meta.env.DEV) {
    globalForPrisma.prisma = prisma;
}
