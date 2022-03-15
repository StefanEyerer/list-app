import * as express from 'express';
import { handleCreateList } from './controllers/handle-create-list';
import { handleReadList } from './controllers/handle-read-list';
import { handleReadLists } from './controllers/handle-read-lists';
import { validateCreateList } from './validators/validate-create-list';
import { validateReadList } from './validators/validate-read-list';
import { validateReadLists } from './validators/validate-read-lists';

const listsRouter = express.Router();

listsRouter.post('/', validateCreateList(), handleCreateList);

listsRouter.get('/', validateReadLists(), handleReadLists);

listsRouter.get('/:id', validateReadList(), handleReadList);

listsRouter.put('/:id', (req, res) => {
  res.json({ message: 'listsRouter: PUT /' + req.params.id });
});

listsRouter.delete('/:id', (req, res) => {
  res.json({ message: 'listsRouter: DELETE /' + req.params.id });
});

listsRouter.delete('/', (req, res) => {
  res.json({ message: 'listsRouter: DELETE /' });
});

export { listsRouter };
