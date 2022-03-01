import { Router } from 'express';
import { main } from 'src/controllers/root/main';

const root = Router();

root.route('/').get(main);

export default root;
