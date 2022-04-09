/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShareModel } from '@list-app/backend/shared/data-access';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function handleDeleteShares(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }

  try {
    const userId = (req as any)['userId'];
    const ids = req.body['ids'];
    await ShareModel.deleteMany({ _id: { $in: ids }, user: userId });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
