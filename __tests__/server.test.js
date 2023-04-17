'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

xdescribe('Auth Login/Logout', () => {
  it('able create a new user', async () => {
    const response = await request.post('/signup').send({
      username: 'RyanBagan21',
      password: 'PeaceWalker21',
    });
    console.log (response.body);
    expect(response.username).toBe('RyanBagan21');
  });
});
