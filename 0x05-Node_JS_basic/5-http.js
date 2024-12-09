const http = require('http');
const students = require('3-read_file_async.js');
const PORT = 1245;
const app = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url === '/') {
    res.write('Hello ALX!');
  } else if (req.url === '/students') {
    students(procss.argv[2])
    .then(function (data) {
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
      res.end();
    })
    .catch(function (error) {
      res.writeHead(500);
      res.end(error.message);
    });
  }
  re.end();
});

app.listen(PORT, function () {
  console.log('...');
});

module.exports = app;
