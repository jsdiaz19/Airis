import { Request, Response } from 'express';

import { UserModel } from '../../../utils/interfaces/user';
import { generateUserToken } from '../../../utils/token';

export const refreshTokenUserRole = async (req: Request, res: Response) => {
  const { _id, email } = req.body;

  const user: UserModel = {
    email,
    _id
  };

  return res.status(200).json({
    ok: true,
    token: generateUserToken(user),
  });
};
