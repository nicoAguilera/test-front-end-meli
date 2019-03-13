'use strict';

import { Router } from 'express';

import ItemByIdRoute from './itemById.route';
import ItemsByQuery from './itemsByQuery.route';

const ItemsRouter = new Router();

ItemsRouter.get('/:id', ItemByIdRoute);
ItemsRouter.get('/', ItemsByQuery);

export default ItemsRouter;