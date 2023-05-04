import { Application } from 'express';

import app from '../../src/app';

export const getApp = async (): Promise<Application> => {
  let appInstance: Application = app;
  return appInstance;
};
