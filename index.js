'use strict';

const { start } = require('./src/server');

const { sequelizeDB } = require('./src/auth/models');

sequelizeDB.sync().then(() => {
  console.log('Database connected successfully!');
  start();
})
.catch((err) => console.error(err));
