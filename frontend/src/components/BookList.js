import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../services/bookService';
import '../styles/styleBookList.css';

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
        <center>
            <div className="book-list">
            <center><h2>Book List</h2></center>
            <div className="book-grid">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book._id} className="book-card">
                            <Link to={`/books/${book._id}`}>
                                <h3 className="book-title">{book.title}</h3>
                            </Link>
                            <p>By {book.author}</p>
                            <p>Published: {new Date(book.publishedDate).getFullYear()}</p>
                            <p>Type: {book.type}</p>
                        </div>
                    ))
                ) : (
                    <p>No books available</p>
                )}
            </div>
        </div>
        </center>
    );
};

export default BookList;
