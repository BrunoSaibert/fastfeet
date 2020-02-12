import { Router } from 'express';

const routes = new Router();

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
