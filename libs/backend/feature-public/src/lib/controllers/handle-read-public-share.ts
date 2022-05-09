import { prisma } from '@list-app/backend/shared/data-access';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function handleReadPublicShare(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }

  try {
    const accessKey = req.params['accessKey'];
    const share = await prisma.share.findFirst({
      where: { accessKey: accessKey },
      select: {
        id: true,
        accessKey: true,
        list: {
          select: { id: true, name: true, description: true, items: true },
        },
      },
    });

    if (!share) {
      res.status(404).json({ error: 'share not found' });
      return;
    }

    res.status(200).json(share.list);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
