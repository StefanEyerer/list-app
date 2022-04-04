import * as express from 'express';

const publicRouter = express.Router();

publicRouter.get('/shares/:accessKey', (req, res) => {
  res.json({ message: 'publicRouter: GET /shares/' + req.params.accessKey });
});

export { publicRouter };
