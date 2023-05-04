import { sign } from 'jsonwebtoken';

import { CONFIG } from './config';
import { UserModel } from './interfaces/user';

export const generateUserToken = (user: UserModel) => {
  return sign({ user }, String(CONFIG.SECRET_AUTHORIZATION_TOKEN), { expiresIn: '1h' });
};
