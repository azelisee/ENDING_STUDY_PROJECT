import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';

const ENDPOINT = process.env.REACT_APP_API_URL;

const WebSocketClient = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);

        socket.on('books', (data) => {
            fetchBooks();
        });

        fetchBooks();

        return () => {
            socket.disconnect();
        };
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get(`${ENDPOINT}/books`);
        setBooks(response.data);
    };

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map(book => (
                    <li key={book._id}>{book.title}</li>
                ))}
            </ul>
            <h1>Borrows</h1>
            <ul>
                {books.map(books => (
                    <li key={books._id}>{books.borrowedBy} borrowed {books._id}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketClient;
