const http = require('http');
const students = require('3-read_file_async.js');
const PORT = 1245;
const app = http.createServer((req, res) => {
  res.writeHead(200);
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello ALX!');
  } else if (req.url === '/students') {
    students(procss.argv[2])
    .then((data) => {
      res.end(`Number of students: ${data.students.length}\n` +
      `Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n` +
      `Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
    })
    .catch((error) => {
      res.writeHead(500);
      res.end(error.message);
    });
  }
});

app.listen(PORT);

module.exports = app;
