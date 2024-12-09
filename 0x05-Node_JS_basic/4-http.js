const http = require('http');
const PORT = 1245;
const app = http.createServer((req, res) => {
  res.writeHead(200);
  res.setHeader('Content-Type', 'application/json');
  res.end('Hello ALX!');
});

app.listen(PORT);

module.exports = app;
