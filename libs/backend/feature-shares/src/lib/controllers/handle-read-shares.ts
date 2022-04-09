/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShareModel } from '@list-app/backend/shared/data-access';
import { Shares } from '@list-app/shared/api-interfaces';
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
    const shares = await ShareModel.find({ user: userId }).populate('list');
    const responsePayload: Shares = {
      items: [
        ...shares.map((share) => {
          const list = share.get('list');
          return {
            id: share.get('id', String),
            accessKey: share.get('accessKey', String),
            list: {
              id: list['_id'],
              name: list['name'],
              description: list['description'],
            },
          };
        }),
      ],
    };
    res.status(200).json(responsePayload);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
