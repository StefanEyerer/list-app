import * as express from 'express';

const listsRouter = express.Router();

listsRouter.post('/', (req, res) => {
  res.json({ message: 'listsRouter: POST /' });
});

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
