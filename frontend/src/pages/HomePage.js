import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Library</h1>
            <p>This is the home page of the library management system.</p>
            <p>
                <Link to="/books">Browse Books</Link>
            </p>
            <p>
                <Link to="/search">Search Books</Link>
            </p>
        </div>
    );
};

export default HomePage;
