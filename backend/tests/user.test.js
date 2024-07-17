const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app'); // Importez l'application Express depuis app.js
const User = require('../src/models/userModel');

describe('User API', () => {
    beforeAll(async () => {
        // Connect to a test database
        const url = 'mongodb://127.0.0.1:27017/user_test_db';
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
    // Clean up database and close the connection
        await User.deleteMany({});
        await mongoose.connection.close();
    });

    it('should create a new user', async () => {
        const newUser = {
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123'
        };

        const res = await request(app)
            .post('/api/users')
            .send(newUser);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('user');
        expect(res.body.user).toHaveProperty('_id');
        expect(res.body.user.name).toBe(newUser.name);
        expect(res.body.user.email).toBe(newUser.email);
    });

    it('should get all users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('users');
        expect(res.body.users.length).toBeGreaterThan(0);
    });

  // Add more tests as needed
});
