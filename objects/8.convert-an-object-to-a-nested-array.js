/**Convert the person object into a nested array nestedPerson, containing the same key-value pairs. */

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33,
};

let nestedPerson = Object.entries(person);

console.log(nestedPerson);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

/**LS
 * Discussion
Our solution leverages the Object.entries() method, which returns an array of a given object's key/value pairs. You can achieve the same using a for...in loop:
 */

let nestedPerson2 = [];

for (let property in person) {
  nestedPerson2.push([property, person[property]]);
}
console.log(nestedPerson2);
