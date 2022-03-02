import { Router } from 'express';
import { get_all_users } from 'src/controllers/users/users.get.all';

const router = Router();

router.route('/users').get(get_all_users);

export default router;
