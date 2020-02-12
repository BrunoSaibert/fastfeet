import { Router } from 'express';

const routes = new Router();

import User from './app/models/User';

// Rota
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Bruno Saibert',
    email: 'brunosaibert@gmail.com',
    password_hash: '123456',
  });

  return res.json(user);
});

export default routes;
