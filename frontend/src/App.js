import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import Books from './pages/Books';
import BookDetail from './components/BookDetail';
import LoginPage from './pages/LoginPage';
import './styles/style.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/books" exact component={Books} />
                        <Route path="/books/:id" component={BookDetail} />
                        <Route path="/login" component={LoginPage} />
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
