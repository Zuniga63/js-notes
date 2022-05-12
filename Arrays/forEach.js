import { students } from "./example-data";

students.forEach((student) => console.log(student));

students.forEach((student, index) => {
  console.log(student);
  console.log(index);
});

students.forEach((student, index, students) => {
  console.log(student);
  console.log(index);
  console.log(students);
});
