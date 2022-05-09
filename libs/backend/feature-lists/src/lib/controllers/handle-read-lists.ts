/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@list-app/backend/shared/data-access';
import { Request, Response } from 'express';

export async function handleReadLists(req: Request, res: Response) {
  try {
    const userId = (req as any)['userId'];
    const lists = await prisma.list.findMany({
      where: { userId: userId },
      select: { id: true, name: true, description: true, items: true },
    });
    res.status(200).json({ items: lists });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
