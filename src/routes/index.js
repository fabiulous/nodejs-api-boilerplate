import { Router } from 'express';
import module from './module';

const routes  = Router();

routes.use('/module', module);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to ou API!' });
});

export default routes;
