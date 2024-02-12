const supertest = require('supertest');
const app = require('../app');

describe('API Tests', () => {

    it("Test receiving post request body", async () => {

        const response = await supertest(app)
        .get('/api/test')
        .query({ name: 'John', age: 25 });

        expect(response.body.name).toBe("John")
        expect(response.body.age).toBe("25");

    });


});