function calculateStudentGrades() {
    const numStudents = prompt('Enter the number of students:');
    const students = [];

    for (let i = 0; i < numStudents; i++) {
      const name = prompt(`Enter the name for student ${i + 1}:`);
      const mark = Number(prompt(`Enter the mark for student ${i + 1}:`));
      let grade;
      
      if (mark >= 90) {
        grade = 'A+';
      } else if (mark >= 80) {
        grade = 'A';
      } else if (mark >= 70) {
        grade = 'B';
      } else if (mark >= 60) {
        grade = 'C';
      } else if (mark >= 50) {
        grade = 'D';
      } else {
        grade = 'F';
      }
      const studentDetails = { name, mark, grade };
      students.push(studentDetails);
    }
  
    const studentTable = document.getElementById("student-table");
  
    for (let i = 0; i < students.length; i++) {
      const studentDetails = students[i];

      const row = document.createElement('tr');
      row.innerHTML = `<td> Student: ${studentDetails.name}</td>
                       <td> Mark: ${studentDetails.mark}</td>
                      <td> Grade: ${studentDetails.grade}</td>`;
      studentTable.appendChild(row);
    }
  }
  calculateStudentGrades();

