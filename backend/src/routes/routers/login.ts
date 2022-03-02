import { Router } from 'express';
import { login } from 'src/controllers/signin/login.post';

const router = Router();

router.route('/login').post(login);

export default router;
