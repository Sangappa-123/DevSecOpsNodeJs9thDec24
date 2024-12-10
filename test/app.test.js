const request = require('supertest');
const app = require('../app');

let server; // Reference to the server

beforeAll(() => {
  // Start the server before tests
  server = app.listen(3000);
});

afterAll(() => {
  // Close the server after tests
  server.close();
});

describe('GET /', () => {
  it('should respond with "Hello, GitHub Actions!"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello, GitHub Actions!');
  });
});
