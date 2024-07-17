import axios from 'axios';

const API_URL = 'http://localhost:5000/api';
const RECOMMENDATION_URL = 'http://localhost:8000';

export const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
};

export const getRecommendations = async (userId) => {
    const response = await axios.post(`${RECOMMENDATION_URL}/recommendations`, { user_id: userId });
    return response.data.recommendations;
};
