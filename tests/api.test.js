const supertest = require('supertest');
const app = require('../app');

describe('API Tests', () => {

    it("Test successfully create user", async() =>{
        const response = await supertest(app)
        .post('/api/register')
        .send({username: "john", email: "john@john.com", password: "john"})

        expect(response.body).toBe("Successfully Added User");
        console.log(response.error);
    });


    it("Missing Information", async() =>{
        const response = await supertest(app)
        .post('/api/register')
        .send({username: "john", email: "john@john.com"})

        expect(response.body).toBe("Missing Information");
        console.log(response.error);
    });


    it("Duplicate Information", async() =>{
        const response = await supertest(app)
        .post('/api/register')
        .send({username: "john", email: "john@john.com", password: "john"})

        expect(response.body).toBe("Duplicate Information");
        console.log(response.error);
    });



});