import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="header">
                <h1>Welcome to the Digital Library</h1>
                <p>Your gateway to a world of knowledge and discovery</p>
            </header>
            <main className="main-content">
                <section className="intro-section">
                    <h2>About Our Library</h2>
                    <p>
                        Our digital library offers an extensive collection of books across various genres and disciplines. Whether you’re a student, a professional, or a book enthusiast, you’ll find something of interest.
                    </p>
                    <p>
                        We aim to provide easy access to knowledge and learning materials, making it simple for you to explore, read, and grow.
                    </p>
                </section>
                <section className="features-section">
                    <h2>Explore Our Features</h2>
                    <ul>
                        <li>Browse a vast collection of books in various genres</li>
                        <li>Search for specific titles or authors quickly and easily</li>
                        <li>Personalized book recommendations based on your interests</li>
                        <li>Save your favorite books to your personal library</li>
                        <li>Access your reading history and manage your account</li>
                    </ul>
                </section>
                <section className="cta-section">
                    <h2>Get Started</h2>
                    <p>Ready to dive into the world of books? Explore our collection and find your next great read today!</p>
                    <div className="cta-buttons">
                        <Link to="/books" className="cta-button">Browse Books</Link>
                        <Link to="/search" className="cta-button">Search Books</Link>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Digital Library. All rights reserved.</p>
                <p>Contact us at <a href="mailto:azoumaelisee98@gmail.com">azoumaelisee98@gmail.com</a></p>
            </footer>
        </div>
    );
};

export default HomePage;
