const fs = require('fs');
const { EOL } = require('os');

function countStudents(filename) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filename)) {
      return reject(new Error('Cannot load the database'));
    }
    return fs.readFile(filename, (err, data) => {
      if (err) {
        return reject(new Error(err.message));
      }
      const students = data.toString().split(EOL)
        .map((studentLine) => studentLine.split(','))
        .filter((studentData) => studentData.length === 4 && studentData[0] !== 'firstname');
      const csStudents = students
        .filter((student) => student[3] === 'CS')
        .map((student) => student[0]);
      const sweStudents = students
        .filter((student) => student[3] === 'SWE')
        .map((student) => student[0]);

      console.log(`Number of students: ${students.length}`);
      console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
      resolve({ students, csStudents, sweStudents });
    });
  });
}

module.exports = countStudents;
