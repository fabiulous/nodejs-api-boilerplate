import { Router } from 'express';
import { get, getAll } from './get';
import post from './post';
import put from './put';
import del from './delete';

const module = Router();

module.get('/', getAll);
module.post('/', post);
module.get('/:id', get);
module.put('/:id', put);
module.delete('/:id', del);

export default module;
