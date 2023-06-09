import express from 'express';

import authentication from './auth';
import user from './user';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  user(router);

  return router;
};