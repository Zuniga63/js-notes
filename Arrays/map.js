import { students } from "./example-data.js";

const fullNames = students.map((student) => `${student.name} ${student.lastname}`);

//console.log(fullNames);

const studnetsMap = students.map((student) => {
  const { name, lastname, age, course } = student;
  const fullName = `${name} ${lastname}`;
  const title = `${fullName} - ${course}`;

  return { fullName, age, course, title };
});

console.log(studnetsMap);

const map2 = students.map((student) => ({ ...student, course: "Programing" }));
console.log(map2);
