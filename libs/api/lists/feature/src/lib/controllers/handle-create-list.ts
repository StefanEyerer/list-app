import { ListModel } from '@list-app/api/shared/data-access';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function handleCreateList(
  req: Request,
  res: Response
): Promise<void> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.mapped() });
    return;
  }

  try {
    const list = await new ListModel({ ...req.body }).save();
    const responsePayload = {
      id: list.get('_id', String),
      name: list.get('name', String),
      description: list.get('description', String),
      items: list.get('items', Array),
    };
    res.status(201).json(responsePayload);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
