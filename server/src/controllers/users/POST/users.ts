import { Request, Response } from 'express';
import { v4 } from 'uuid';

import { UserModel } from '../../../utils/interfaces/user';
import { generateUserToken } from '../../../utils/token';

export const login = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user: UserModel = {
    email,
    _id: v4()
  };

  return res.status(200).json({
    ok: true,
    token: generateUserToken(user)
  });
};
