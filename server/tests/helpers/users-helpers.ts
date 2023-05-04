import { UserModel } from '../../src/utils/interfaces/user';

export const mockUser = (): Pick<UserModel, '_id' | 'email'> => {
  return {
    _id: 'mockID',
    email: 'mockemail@email.com'
  };
};
