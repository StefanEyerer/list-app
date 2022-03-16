import { ListModel } from '@list-app/api/shared/data-access';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function handleUpdateList(
  req: Request,
  res: Response
): Promise<void> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }

  try {
    const id = req.params['id'];
    const list = await ListModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (!list) {
      res.status(404).json({ error: 'list not found' });
      return;
    }

    const responsePayload = {
      id: list.get('id', String),
      name: list.get('name', String),
      description: list.get('description', String),
      items: list.get('items', Array),
    };
    res.status(200).json(responsePayload);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
