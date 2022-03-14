import * as express from 'express';
import { handleCreateList } from './controllers/handle-create-list';
import { validateCreateList } from './validators/validate-create-list';

const listsRouter = express.Router();

listsRouter.post('/', validateCreateList(), handleCreateList);

listsRouter.get('/', (req, res) => {
  res.json({ message: 'listsRouter: GET /' });
});

listsRouter.get('/:id', (req, res) => {
  res.json({ message: 'listsRouter: GET /' + req.params.id });
});

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
