// 1. Student Bio App
// Create a JavaScript program that stores a student's information using an object.

// Requirements:
// Store:
// - student name
// - age
// - course

// Create a function that displays the student information in a readable sentence using template literals.

const studentInfo = {
    studentName: "Tope",
    age: 15,
    course: "CSC"
}

function displayStudentInfo(){
    console.log(`Student Name is ${studentInfo.studentName} with age ${studentInfo.age} studying ${studentInfo.course}`);
}
displayStudentInfo();
// console.log("Student Name is "+ "" + studentInfo.studentName);