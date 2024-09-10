const express = require('express');

const userRouter = express.Router();

userRouter.get('/test', (req, res, next) => {
  return res.send('OK');
});

module.exports = { userRouter };
