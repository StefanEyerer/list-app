/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListModel } from '@list-app/backend/shared/data-access';
import { Lists } from '@list-app/shared/api-interfaces';
import { Request, Response } from 'express';

export async function handleReadLists(req: Request, res: Response) {
  try {
    const userId = (req as any)['userId'];
    const lists = await ListModel.find({ user: userId });
    const responsePayload: Lists = {
      items: [
        ...lists.map((list) => {
          return {
            id: list.get('id', String),
            name: list.get('name', String),
            description: list.get('description', String),
            items: list.get('items', Array),
          };
        }),
      ],
    };
    res.status(200).json(responsePayload);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
