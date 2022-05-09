/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@list-app/backend/shared/data-access';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function handleReadList(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }

  try {
    const userId = (req as any)['userId'];
    const id = req.params['id'];
    const list = await prisma.list.findFirst({
      where: { id: id, userId: userId },
      select: { id: true, name: true, description: true, items: true },
    });

    if (!list) {
      res.status(404).json({ error: 'list not found' });
      return;
    }

    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
