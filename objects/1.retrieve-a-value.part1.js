// Write the code necessary to retrieve the value of the courses property of our student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

student.courses;

console.log(student.courses); // [ 'biology', 'algebra', 'composition', 'ceramics' ]
console.log(student.lunch); // undefined

/**LS
 * Discussion
We can access the property value using either dot notation or bracket notation. JavaScript style guides typically recommend using dot notation when possible.

Further Exploration
What is returned if you attempt to access an object property that does not exist? Try it out for yourself, for example calling student.locker with the above example object. Especially notice that no exception is raised.
 */
