import React, { useState } from 'react';
import axios from 'axios';
import '../styles/styleBookList.css';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/books/search`, { query });
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
            <form onSubmit={handleSearch}>
                <center><h2>Search Books</h2></center>
                <div>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for books..."
                    />
                    <button type="submit">Search</button>
                </div>
            </form>
            <br/>
            <center>
            <div className="book-list">
                {results.length > 0 ? (
                    <div className="book-grid">
                        {results.map((book) => (
                            <div key={book._id} className="book-card">
                                <a href={`/books/${book._id}`} className="book-title">{book.title}</a>
                                <p>By {book.author}</p>
                                <p>Published: {formatDate(book.publishedDate)}</p>
                                <p>Type: {book.type}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No books found.</p>
                )}
            </div>
            </center>
        </div>
    );
};

export default SearchPage;
