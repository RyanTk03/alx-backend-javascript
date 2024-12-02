const fs = require('fs');

function countStudents(filename) {
  try {
    if (!fs.existsSync(path)) {
      throw Error('Cannot load the database');
    }
    const fileContent = fs.readFileSync(filename);
    const students = fileContent.split('\n')
      .map((studentLine) => studentLine.split(','))
      .filter((studentData) => studentData.length === 4 && studentData[0] !== 'firstname');
    const csStudents = students
      .filter((student) => student[4] === 'CS')
      .map((student) => student[0]);
    const sweStudents = students
      .filter((student) => student[4] === 'SWE')
      .map((student) => student[0]);

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch(error) {
    throw error;
  }
}
