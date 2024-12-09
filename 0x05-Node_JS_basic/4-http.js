const http = require('http');
const PORT = 1245;
const app = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello ALX!');
  re.end();
});

app.listen(PORT, function () {
  console.log('...');
});

module.exports = app;
