/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListModel, ShareModel } from '@list-app/backend/shared/data-access';
import { Share } from '@list-app/shared/api-interfaces';
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
    const list = await ListModel.findOne({ _id: listId, user: userId });

    if (!list) {
      res.status(404).json({ error: 'list not found' });
      return;
    }

    const buffer = randomBytes(20);
    const accessKey = buffer.toString('hex');
    const share = await new ShareModel({
      accessKey: accessKey,
      list: listId,
      user: userId,
    }).save();
    const responsePayload: Share = {
      id: share.get('id', String),
      accessKey: share.get('accessKey', String),
      list: {
        id: list.get('id', String),
        name: list.get('name', String),
        description: list.get('description', String),
      },
    };
    res.status(201).json(responsePayload);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
