const express = require('http');
const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello ALX!');
});

app.listen(PORT);

module.exports = app;
