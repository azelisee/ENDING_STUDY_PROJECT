import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/styleHeader.css';

const Header = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><span>Home</span></li>
                <li><span>Books</span></li>
                <li><span>About</span></li>
                {user ? (
                    <>
                        <li>{user.name}</li>
                        <li><button onClick={handleLogout} className="nav-list button">Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><button className="nav-list button"><Link to="/login">Login</Link></button></li>
                        <li><button className="nav-list button"><Link to="/register">Register</Link></button></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Header;
