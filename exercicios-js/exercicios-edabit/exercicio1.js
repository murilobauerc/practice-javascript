const getStudentNames = [{ name: "Steve" }, { name: "Mike" }, { name: "John" }];

// console.log(getStudentNames[0].name); // "Steve"

// Create a function that takes an array of students and returns an array of student names.

studentNames = () => {
  const arrayOfStudentsName = [];
  getStudentNames.map(student => {
    arrayOfStudentsName.push(student.name);
  });
  return arrayOfStudentsName;
};

console.log(studentNames());
