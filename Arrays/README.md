# JavaScript Arrays

## forEach

Permite recorrer cada uno de los elementos dentro del arrego y retorna `undefined`.

~~~js
const students = [];

students.forEach((student) => console.log(student));

students.forEach((student, index) => {
  ...
});

students.forEach((student, index, students) => {
  ...
});
~~~

***

## Map

El metodo map crea un nuevo array con los resultados de la llamada a la función indicada aplicado a cada uno de los elementos.

~~~js
const fullNames = students.map(student => `${student.name} ${student.lastname}`);

const studnetsMap = students.map((student) => {
  const { name, lastname, age, course } = student;
  const fullName = `${name} ${lastname}`;
  const title = `${fullName} - ${course}`;

  return { fullName, age, course, title };
});


const newCourses = students.map((student) => ({ ...student, course: "Programing" }));


~~~

***

## Filter
