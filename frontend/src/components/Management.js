import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/bookService';

const Management = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                if (Array.isArray(data.users)) {
                    setUsers(data.users);
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
        <center>
            <div>
                <h2>Users situation</h2>
                <br/>
                {users.length > 0 ?(
                    users.map((user) => (
                    <div key={user._id}>
                        <h3>Name : {user.name}</h3>
                        <h3>Email : {user.email}</h3>
                        <br/>
                        <h4>Borrows:</h4>
                        <ul>
                            {user.borrowedBooks.map(book => (
                                <li key={book._id}>{book.title} by {book.author}</li>
                            ))}
                        </ul>
                        <br/>
                        <h4>Returns:</h4>
                        <ul>
                            {user.returnedBooks.map(book => (
                                <li key={book._id}>{book.title} by {book.author}</li>
                            ))}
                        </ul>
                        <hr/>
                    </div>
                    ))
                ) : (
                    <p>No users available</p>
                )}
            </div>
        </center>
    );
};

export default Management;
