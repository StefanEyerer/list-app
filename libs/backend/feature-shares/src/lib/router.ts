import { authMiddleware } from '@list-app/backend/shared/feature-auth';
import * as express from 'express';
import { handleCreateShare } from './controllers/handle-create-share';
import { handleDeleteShare } from './controllers/handle-delete-share';
import { handleDeleteShares } from './controllers/handle-delete-shares';
import { handleReadShare } from './controllers/handle-read-share';
import { handleReadShares } from './controllers/handle-read-shares';
import { validateCreateShare } from './validators/validate-create-share';
import { validateDeleteShare } from './validators/validate-delete-share';
import { validateDeleteShares } from './validators/validate-delete-shares';
import { validateReadShare } from './validators/validate-read-share';
import { validateReadShares } from './validators/validate-read-shares';

const sharesRouter = express.Router();

sharesRouter.post(
  '/',
  authMiddleware,
  validateCreateShare(),
  handleCreateShare
);

sharesRouter.get('/', authMiddleware, validateReadShares(), handleReadShares);

sharesRouter.get('/:id', authMiddleware, validateReadShare(), handleReadShare);

sharesRouter.delete(
  '/:id',
  authMiddleware,
  validateDeleteShare(),
  handleDeleteShare
);

sharesRouter.delete(
  '/',
  authMiddleware,
  validateDeleteShares(),
  handleDeleteShares
);

export { sharesRouter };
