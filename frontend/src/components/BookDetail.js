import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import '../styles/style.css';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [message, setMessage] = useState('');
    const { user } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            history.push('/login');
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
    }, [id, user, history]);

    const handleBorrow = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/books/${id}/borrowBook`, { userId: user.id });
            setBook(response.data.book);
            setMessage('Book borrowed successfully.');
        } catch (error) {
            console.error('Error borrowing book:', error);
            setMessage('Error borrowing book.');
        }
    };

    const handleReturn = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/books/${id}/returnBook`, { userId: user.id });
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
        <div>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Published Date:</strong> {new Date(book.publishedDate).getFullYear()}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            {book.isBorrowed ? (
                <button onClick={handleReturn}>Return</button>
            ) : (
                <button onClick={handleBorrow}>Borrow</button>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookDetail;
