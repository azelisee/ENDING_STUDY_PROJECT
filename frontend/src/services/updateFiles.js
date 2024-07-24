const fs = require('fs');
const socketIoClient = require('socket.io-client');
const books = require('/backend/src/models/bookModel');

const ENDPOINT = process.env.REACT_APP_API_URL;
const socket = socketIoClient(ENDPOINT);

const updateBooksFile = (books) => {
    fs.writeFileSync('./books.txt', JSON.stringify(books, null, 2));
};

socket.on('books', async () => {
    const response = await axios.get(`${ENDPOINT}/books`);
    updateBooksFile(response.data);
});

console.log('Listening for updates...');

