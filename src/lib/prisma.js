import { PrismaClient } from "@prisma/client";



export const prisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        {
            emit: 'event',
            level: 'info',
        },
        {
            emit: 'event',
            level: 'warn',
        },
        {
            emit: 'event',
            level: 'error',
        },
    ],
});

// Event listeners for logging
prisma.$on('query', (e) => {
    console.log(`Query: ${e.query}`);
    console.log(`Params: ${e.params}`);
    console.log(`Duration: ${e.duration}ms`);
});

