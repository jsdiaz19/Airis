import { Application } from 'express';
import request from 'supertest';

import { mockUser } from '../../helpers/users-helpers';
import { getApp } from '../../helpers/server-helpers';
import { UserModel } from '../../../src/utils/interfaces/user';

describe('POST /login', () => {
  let app: Application;
  let user: Partial<UserModel>;

  beforeAll(async () => {
    app = await getApp();
    user = mockUser();
  });

  it('should return a 200 status code when calling the "/login" route', function (done) {
    request(app)
      .post('/api/v1/login')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        done();
      })
      .catch((err) => done(err));
  });
});
