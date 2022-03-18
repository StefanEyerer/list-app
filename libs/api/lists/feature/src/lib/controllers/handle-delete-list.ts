import { ListModel } from '@list-app/api/shared/data-access';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export async function handleDeleteList(
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
    const list = await ListModel.deleteOne({ _id: id });

    if (!list) {
      res.status(404).json({ error: 'list not found' });
      return;
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
