import * as express from 'express';
import { listsRouter } from '@list-app/backend/feature-lists';
import { publicRouter } from '@list-app/backend/feature-public';
import { sharesRouter } from '@list-app/backend/feature-shares';

const apiRouter = express.Router();

apiRouter.use('/lists', listsRouter);
apiRouter.use('/public', publicRouter);
apiRouter.use('/shares', sharesRouter);

export default apiRouter;
