import * as express from 'express';

const sharesRouter = express.Router();

sharesRouter.post('/', (req, res) => {
  res.json({ message: 'sharesRouter: POST /' });
});

sharesRouter.get('/', (req, res) => {
  res.json({ message: 'sharesRouter: GET /' });
});

sharesRouter.get('/:id', (req, res) => {
  res.json({ message: 'sharesRouter: GET /' + req.params.id });
});

sharesRouter.delete('/:id', (req, res) => {
  res.json({ message: 'sharesRouter: DELETE /' + req.params.id });
});

sharesRouter.delete('/', (req, res) => {
  res.json({ message: 'sharesRouter: DELETE /' });
});

export { sharesRouter };
