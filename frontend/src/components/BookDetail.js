import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import '../styles/style.css';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [message, setMessage] = useState('');
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        const fetchBook = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/books/${id}`);
                setBook(response.data.book);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBook();
    }, [id, user, navigate]);

    const handleBorrow = async () => {
        if (book.isBorrowed) {
            setMessage('Book is already borrowed.');
            return;
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/books/borrowBook`, { bookId: book._id, userId: user.id });
            setBook(response.data.book);
            setMessage('Book borrowed successfully.');
        } catch (error) {
            console.error('Error borrowing book:', error);
            setMessage('Error borrowing book.');
        }
    };

    const handleReturn = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/books/returnBook`, { bookId: book._id, userId: user.id  });
            setBook(response.data.book);
            setMessage('Book returned successfully.');
        } catch (error) {
            console.error('Error returning book:', error);
            setMessage('Error returning book.');
        }
    };

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <center>
            <div className='book-card'>
                <h2>{book.title}</h2>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Published Date:</strong> {new Date(book.publishedDate).getFullYear()}</p>
                <p><strong>Gender:</strong> {book.gender}</p>
                {book.isBorrowed ? (
                    <>
                        <button onClick={handleReturn}>Return</button>
                        {message && <p>{message}</p>}
                    </>
                ) : (
                    <>
                        <button onClick={handleBorrow}>Borrow</button>
                        {message && <p>{message}</p>}
                    </>
                )}
            </div>
        </center>
    );
};

export default BookDetail;
