/**Write a function clone that takes an object as argument and returns a shallow copy of that argument. A shallow copy returns a new object that is a copy of the original object. However, only the object itself and any properties with primitive values are duplicated. Properties that are themselves objects are copied "by reference" -- that is, only a pointer to the object is copied.
 */

function clone(object) {
  return Object.assign({}, object);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true,
  },
  age: 33,
};

let clonedPerson = clone(person);
person.age = 34;
clonedPerson.title = 'Bobby';

console.log(person.age); // 34
console.log(clonedPerson.age); // 33
console.log(person.title); // 'Duke'
console.log(clonedPerson.title); // 'Bobby'

person.name.isStageName = false;
console.log(person.name.isStageName); // false
console.log(clonedPerson.name.isStageName); // false

/**LS
 * Discussion
There are different ways to clone an object. The arguably easiest one is to use the Object.assign method. Note that this method only creates a shallow copy, which means that if you mutate one of the values in person, they will be mutated in clonedPerson as well. For example:
 */
