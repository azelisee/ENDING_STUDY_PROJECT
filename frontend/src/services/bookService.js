import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/books/getBooks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/books/getUsers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};
