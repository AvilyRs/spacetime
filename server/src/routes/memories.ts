import { FastifyInstance } from 'fastify';
import { z } from 'zod';

import { prismaClient } from '../lib/prisma';

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = prismaClient.memory.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    });

    return (await memories).map(memory => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...')
      };
    });
  });

  app.get('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid()
    });

    const { id } = paramsSchema.parse(request.params);

    const memory = await prismaClient.memory.findFirstOrThrow({
      where: { id }
    });

    return memory;
  });

  app.post('/memories', async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false)
    });

    const { content, isPublic, coverUrl } = bodySchema.parse(request.body);

    const memory = await prismaClient.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: 'ca76e28f-084d-424a-929f-00dd5f7547f2'
      }
    });

    return memory;
  });

  app.delete('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid()
    });

    const { id } = paramsSchema.parse(request.params);

    await prismaClient.memory.delete({
      where: { id }
    });
  });

  app.put('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid()
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false)
    });

    const { content, isPublic, coverUrl } = bodySchema.parse(request.body);

    const memory = await prismaClient.memory.update({
      where: {
        id
      },
      data: {
        content,
        coverUrl,
        isPublic
      }
    });

    return memory;
  });
}