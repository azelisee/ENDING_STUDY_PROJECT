const app = require('./app');
const http = require('http');
const { createServer } = http;

const server = createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
