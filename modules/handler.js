import Person from "./person.js";
import Student from "./student.js";
import Teacher from "./teacher.js";

// TODO - test classes
var testPerson = new Person({name: 'Joe Test'})
var testStudent = new Student({
    name: 'John Clever',
    marks: []
})
var testTeacher = new Teacher({
    name: 'Bob Sinclair',
    students: [testStudent,]
})

export {Person, Student, Teacher}