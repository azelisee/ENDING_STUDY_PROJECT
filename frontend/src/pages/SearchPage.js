import React, { useState } from 'react';
import axios from 'axios';
import '../styles/style.css';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/books/search?q=${query}`);
            setResults(response.data.books);
        } catch (error) {
            console.error('Error searching books:', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.getFullYear();
    };

    return (
        <div>
            <h2>Search Books</h2>
            <form onSubmit={handleSearch}>
                <div>
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for books..."/>
                    <button type="submit">Search</button>
                </div>
            </form>
            <div>
                {results.length > 0 ? (
                    <ul>
                        {results.map((book) => (
                            <li key={book._id}>
                                <a href={`/books/${book._id}`}>{book.title}</a> by {book.author} (Published: {formatDate(book.publishedDate)}) - Genre: {book.gender}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No books found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
