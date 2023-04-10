'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('Auth Login/Logout', () => {
  it('sholud create a new user', async () => {
    const response = (await request.post('/signup')).setEncoding({
      username: 'RyanBagan21',
      password: PeaceWalker*@21,
    });
    console.log (response.body);
    expect(resppnse.username).toBe('RyanBagan21');
  });
});
