'use strict';

const base64 = require('base64');
const bcrypt = require('bcrypt');
const { userCollection } = require('../models');

const basicAuth = async (request, response, next) => {
  let basicHeaderParts = request.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');

  try {
    const user = await userCollection.findOne({ where: { username: username }});
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      request.user = user;
      next();
    } else {
      throw new Error('Invalid Credentials!');
    }
  } catch (error) { response.status(403).send('Invalid Login Credentials!'); }
};

module.exports = basicAuth;
