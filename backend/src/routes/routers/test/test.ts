import { Router } from 'express';
import { main } from 'src/controllers/root/main';

const root = Router();

root.route('/test').get(main);

export default root;
