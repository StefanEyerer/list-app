/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShareModel } from '@list-app/backend/shared/data-access';
import { Share } from '@list-app/shared/api-interfaces';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function handleReadShare(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }

  try {
    const userId = (req as any)['userId'];
    const id = req.params['id'];
    const share = await ShareModel.findOne({ _id: id, user: userId }).populate(
      'list'
    );

    if (!share) {
      res.status(404).json({ error: 'share not found' });
      return;
    }

    const list = share.get('list');
    const responsePayload: Share = {
      id: share.get('id', String),
      accessKey: share.get('accessKey', String),
      list: {
        id: list['_id'],
        name: list['name'],
        description: list['description'],
      },
    };
    res.status(200).json(responsePayload);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
