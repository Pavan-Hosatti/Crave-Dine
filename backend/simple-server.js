const http = require('http');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

// Listen on port 8080
server.listen(8080, '0.0.0.0', () => {
  console.log('Server running at http://localhost:8080/');
});


