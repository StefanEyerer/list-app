/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListModel } from '@list-app/api/shared/data-access';
import { List } from '@list-app/shared/api-interfaces';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function handleReadList(
  req: Request,
  res: Response
): Promise<void> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }

  try {
    const userId = (req as any)['userId'];
    const id = req.params['id'];
    const list = await ListModel.findOne({ _id: id, user: userId });

    if (!list) {
      res.status(404).json({ error: 'list not found' });
      return;
    }

    const responsePayload: List = {
      id: list.get('id', String),
      name: list.get('name', String),
      description: list.get('description', String),
      items: list.get('items', Array),
      userId: list.get('user', String),
    };
    res.status(200).json(responsePayload);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
