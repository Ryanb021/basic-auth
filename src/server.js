'use strict';

require('dotenv').config();

const express = require('express');
const userRouter = require('./auth/router');
const errorFive = require('./middleware/500');
const errorFour = require('./middleware/404');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(userRouter);

app.use(express.urlencoded({ extended: true }));

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

app.use('*', errorFour);
app.use(errorFive);

module.exports = { start, app };
