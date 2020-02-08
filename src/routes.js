import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ m: 'ola mundo' }));

export default routes;
