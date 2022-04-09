import { ShareModel } from '@list-app/backend/shared/data-access';
import { List } from '@list-app/shared/api-interfaces';
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
    const share = await ShareModel.findOne({ accessKey }).populate('list');

    if (!share) {
      res.status(404).json({ error: 'share not found' });
      return;
    }

    const list = share.get('list');
    const responsePayload: List = {
      id: list['_id'],
      name: list['name'],
      description: list['description'],
      items: list['items'],
    };
    res.status(200).json(responsePayload);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
