import express from 'express';

const userRouter = express.Router();

userRouter.post('/test', async (_req, res, _next) => {
  return res.send('OK');
});

export default userRouter;
