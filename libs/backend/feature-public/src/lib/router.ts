import * as express from 'express';
import { handleReadPublicShare } from './controllers/handle-read-public-share';
import { validateReadPublicShare } from './validators/validate-read-public-share';

const publicRouter = express.Router();

publicRouter.get(
  '/shares/:accessKey',
  validateReadPublicShare(),
  handleReadPublicShare
);

export { publicRouter };
