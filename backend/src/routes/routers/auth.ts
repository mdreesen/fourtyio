import { Router } from 'express';
import { get_login } from 'src/controllers/auth/get.login';
import { login } from 'src/controllers/auth/login';
import { logout } from 'src/controllers/auth/logout';

const router = Router();

router.route('/login').post(login).get(get_login);
router.route('/logout').delete(logout);

export default router;
