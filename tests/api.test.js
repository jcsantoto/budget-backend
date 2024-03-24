const supertest = require('supertest');
const app = require('../app');

describe('API Tests', () => {

    // it("Test receiving post request body", async () => {

    //     const response = await supertest(app)
    //     .get('/api/test')
    //     .query({ name: 'John', age: 25 });

    //     expect(response.body.name).toBe("John")
    //     expect(response.body.age).toBe("25");

    // });


    it("Test create user", async() =>{
        const response = await supertest(app)
        .post('/api/register')
        .send({username: "john", email: "john2@john.com", password: "john"})

        // expect(response.body).toBe("Successfully Added User");
        console.log(response.body);
        console.log(response);

    });

    it("Test get user info", async() =>{
        const response = await supertest(app)
        .post('/api/getuser')
        .send({email: "john@john.com"});

        console.log(response.body);
    });

});