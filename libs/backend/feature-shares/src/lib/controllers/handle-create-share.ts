/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@list-app/backend/shared/data-access';
import { randomBytes } from 'crypto';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function handleCreateShare(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }

  try {
    const userId = (req as any)['userId'];
    const listId = req.body['listId'];
    const list = await prisma.list.findFirst({
      where: { id: listId, userId: userId },
    });

    if (!list) {
      res.status(404).json({ error: 'list not found' });
      return;
    }

    const buffer = randomBytes(20);
    const accessKey = buffer.toString('hex');
    const share = await prisma.share.create({
      data: {
        accessKey: accessKey,
        listId: listId,
        userId: userId,
      },
      select: {
        id: true,
        accessKey: true,
        list: {
          select: { id: true, name: true, description: true },
        },
      },
    });
    res.status(201).json(share);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
