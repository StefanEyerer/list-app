import * as express from 'express';
import { listsRouter } from '@list-app/api/lists/feature';
import { publicRouter } from '@list-app/api/public/feature';
import { sharesRouter } from '@list-app/api/shares/feature';

const apiRouter = express.Router();

apiRouter.use('/lists', listsRouter);
apiRouter.use('/public', publicRouter);
apiRouter.use('/shares', sharesRouter);

export default apiRouter;
