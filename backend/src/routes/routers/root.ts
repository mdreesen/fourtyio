import { Router } from 'express';
import { main } from 'src/controllers/root/main';

const router = Router();

router.route('/').get(main);

export default router;
