import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/bookService';
import '../styles/styleBookList.css';

const Management = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                if (Array.isArray(data)) {
                    setUsers(data);
                } else {
                    console.error('Users data is not an array:', data);
                }
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };
        getUsers();
    }, []);

    return (
        <p>
            <center><h2>Users situations : borrows and returns</h2></center>
            <center style={{margin:'100px',marginTop:'30px',  display:'flex',flexWrap:'wrap',gap:'20px'}}>
                {users.length > 0 ?(
                    users.map((user) => (
                    <p key={user._id} className="book-card">
                        <h3>Name : {user.name}</h3>
                        <h3>Email : {user.email}</h3>
                        <br/>
                        <h4>Borrows:</h4>
                            {user.borrowedBooks && user.borrowedBooks.length > 0 ? (
                                user.borrowedBooks.map(book => (
                                    <p key={book._id}>{book.title} <b>by</b> {book.author}</p>
                                ))
                            ) : (
                                <p>No books borrowed</p>
                            )}
                        <br/>
                        <hr/>
                        <h4>Returns:</h4>
                            {user.returnedBooks && user.returnedBooks.length > 0 ? (
                                user.returnedBooks.map(book => (
                                    <p key={book._id}>{book.title} <b>by</b> {book.author}</p>
                                ))
                            ) : (
                                <p>No books returned</p>
                            )}
                    </p>
                    ))
                ) : (
                    <p>No users available</p>
                )}
        </center>
        </p>
    );
};

export default Management;
