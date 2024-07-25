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
import Management from './components/Management';
import './styles/styleHeader.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li><button className="nav-list button"><Link to="/">Home</Link></button></li>
                        <li><button className="nav-list button"><Link to="/books">Books</Link></button></li>
                        <li><button className="nav-list button"><Link to="/about">About</Link></button></li>
                        <li><button className="nav-list button"><Link to="/login">Login</Link></button></li>
                        <li><button className="nav-list button"><Link to="/Management">Management</Link></button></li>
                    </ul>
                </nav>
                <br/>
                <br/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/books/:id" element={<BookDetail />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/Management" element={<Management />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
