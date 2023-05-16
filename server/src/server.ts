import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prismaClient = new PrismaClient();

app.get('/users', async () => {
  const users = await prismaClient.user.findMany();
  return JSON.stringify(users);
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Running on http://localhost:3000');
  });
