const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hey, there!\n');
});

server.listen(8080, () => {
  console.log('Server is running...');
});
