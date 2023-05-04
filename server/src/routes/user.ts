import { Router } from 'express';

// constrollers
import * as getUserMethods from '../controllers/users/GET/users';
import * as postUserMethods from '../controllers/users/POST/users';

const router = Router();

router.get('/refresh-token', getUserMethods.refreshTokenUserRole);
router.post('/login', postUserMethods.login);

export default router;
