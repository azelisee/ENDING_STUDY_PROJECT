import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import { AuthProvider } from './context/AuthContext';
import './styles/style.css';
import WebSocketClient from './components/WebSocketClient';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/books">Books</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/books/:id" element={<BookDetail />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/websocketclient" element={<WebSocketClient />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
