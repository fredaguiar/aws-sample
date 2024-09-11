const express = require('express');

const userRouter = express.Router();

userRouter.get('/test', (req, res, next) => {
  return res.send('OK2!');
});

userRouter.post('/msg', (req, res, next) => {
  const msg = req.body.msg;
  return res.send(msg);
});

module.exports = { userRouter };
