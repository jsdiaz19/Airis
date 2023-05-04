import 'dotenv/config';

export const CONFIG = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  PORT: process.env.PORT,
  SECRET_AUTHORIZATION_TOKEN: process.env.SECRET_AUTHORIZATION_TOKEN,
  CLIENT_URL: process.env.CLIENT_URL,
};
