
const student = {
    id: 1,
    name: "adam",
    grades: [12, 12, 12]

}

console.log('This is a student: ', student);

function addGrade(student, grade) {
    student.grades.push(grade);
}

addGrade(student, 10);
console.log("This is a student after adding a grade: ", student);

function updateStudentName(student, name) {
    student.name = name;
}

updateStudentName(student, 'Robert');
console.log("This is a student after updating the name: ", student);
