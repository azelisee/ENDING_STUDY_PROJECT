const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');
const Book = require('../src/models/bookModel');

describe('Book API', () => {
    beforeAll(async () => {
        // Connect to a test database
        const url = 'mongodb://127.0.0.1:27017/book_test_db';
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        // Clean up database and close the connection
        await Book.deleteMany({});
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        // Seed the database with some test data
        await Book.create([
            { title: 'Book 1', author: 'Author 1', publishedDate: new Date(), genre: 'Fiction' },
            { title: 'Book 2', author: 'Author 2', publishedDate: new Date(), genre: 'Non-Fiction' }
        ]);
    });

    afterEach(async () => {
        // Clean up database after each test
        await Book.deleteMany({});
    });

    it('should return a list of books', async () => {
        const res = await request(app).get('/api/books');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('books');
        expect(res.body.books.length).toBe(2);
    });

    it('should create a new book', async () => {
        const newBook = {
            title: 'New Book',
            author: 'New Author',
            publishedDate: new Date(),
            genre: 'Science Fiction'
        };

        const res = await request(app)
            .post('/api/books')
            .send(newBook);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('book');
        expect(res.body.book).toHaveProperty('_id');
        expect(res.body.book.title).toBe(newBook.title);
        expect(res.body.book.author).toBe(newBook.author);

        const books = await Book.find();
        expect(books.length).toBe(3); // Includes the newly created book
    });

  // Add more tests as needed
});
