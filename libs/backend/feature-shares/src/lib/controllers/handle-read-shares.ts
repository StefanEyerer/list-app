/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@list-app/backend/shared/data-access';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function handleReadShares(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }

  try {
    const userId = (req as any)['userId'];
    const shares = await prisma.share.findMany({
      where: { userId: userId },
      select: {
        id: true,
        accessKey: true,
        list: { select: { id: true, name: true, description: true } },
      },
    });
    res.status(200).json({ items: shares });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
