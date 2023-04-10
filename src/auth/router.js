'use strict';

const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');
const { userModel } = require('./models');
const basicAuth =  require('./middleware/basic');

router.post('/signup', async (request, response, next) => {
  try {
    request.body.password = await bcrypt.hash(request.body.password, 10);
    const record =  await userModel.create(request.body);
    response.status(200).json(record);
  } catch (err) { response.status(403).send('Error Creating User'); }
});

router.post('/signin', basicAuth, async (request, response, next) => {
  response.status(200).json(request.user);
});

module.exports = router;
