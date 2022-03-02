import { Router } from 'express';
import { get_all_users } from 'src/controllers/users/users.get.all';
import { get_one_user } from 'src/controllers/users/users.get.one';

const router = Router();

router.route('/users').get(get_all_users);
router.route('/users/:id').get(get_one_user);

export default router;
