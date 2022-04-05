import request from 'supertest';
import App from './app';

const myApp = new App().app;

describe('Test the root path', () => {
  it('should response the GET method', async () => {
    const response = await request(myApp).get('/');
    expect(response.statusCode).toBe(200);
  });
});
