import { Application } from 'express';
import request from 'supertest';

import { mockUser } from '../../helpers/users-helpers';
import { getApp } from '../../helpers/server-helpers';
import { UserModel } from '../../../src/utils/interfaces/user';

describe('GET /refresh-token', () => {
  let app: Application;
  let user: Partial<UserModel>;

  beforeAll(async () => {
    app = await getApp();
    user = mockUser();
  });

  it('should return a 200 status code when calling the "/refresh-token" route', function (done) {
    request(app)
      .get('/api/v1/refresh-token')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        done();
      })
      .catch((err) => done(err));
  });
});
