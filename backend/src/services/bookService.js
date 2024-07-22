import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}/books/getBooks`);
    return response.data.books;
};
