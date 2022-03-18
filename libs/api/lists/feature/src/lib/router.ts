import * as express from 'express';
import { handleCreateList } from './controllers/handle-create-list';
import { handleDeleteList } from './controllers/handle-delete-list';
import { handleDeleteLists } from './controllers/handle-delete-lists';
import { handleReadList } from './controllers/handle-read-list';
import { handleReadLists } from './controllers/handle-read-lists';
import { handleUpdateList } from './controllers/handle-update-list';
import { validateCreateList } from './validators/validate-create-list';
import { validateDeleteList } from './validators/validate-delete-list';
import { validateDeleteLists } from './validators/validate-delete-lists';
import { validateReadList } from './validators/validate-read-list';
import { validateReadLists } from './validators/validate-read-lists';
import { validateUpdateList } from './validators/validate-update-list';

const listsRouter = express.Router();

listsRouter.post('/', validateCreateList(), handleCreateList);

listsRouter.get('/', validateReadLists(), handleReadLists);

listsRouter.get('/:id', validateReadList(), handleReadList);

listsRouter.put('/:id', validateUpdateList(), handleUpdateList);

listsRouter.delete('/:id', validateDeleteList(), handleDeleteList);

listsRouter.delete('/', validateDeleteLists(), handleDeleteLists);

export { listsRouter };
