import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../services/bookService';
import '../styles/style.css';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const data = await fetchBooks();
                if (Array.isArray(data.books)) {
                    setBooks(data.books);
                } else {
                    console.error('Books data is not an array:', data);
                }
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        getBooks();
    }, []);

    return (
        <div className="book-list">
            <h2>Book List</h2>
            <div className="book-grid">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book._id} className="book-card">
                            <Link to={`/books/${book._id}`}>
                                <h3>{book.title}</h3>
                            </Link>
                            <p>By {book.author}</p>
                            <p>Published: {new Date(book.publishedDate).getFullYear()}</p>
                            <p>Gender: {book.gender}</p>
                        </div>
                    ))
                ) : (
                    <p>No books available</p>
                )}
            </div>
        </div>
    );
};

export default BookList;
