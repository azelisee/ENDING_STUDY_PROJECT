const axios = require('axios');

const getRecommendations = async (userId) => {
  const response = await axios.post('http://localhost:8000/recommendations', { user_id: userId });
  return response.data.recommendations;
};

module.exports = { getRecommendations };
