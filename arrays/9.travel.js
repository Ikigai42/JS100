// The destinations array contains a list of travel destinations.

let destinations = [
  'Prague',
  'London',
  'Sydney',
  'Belfast',
  'Rome',
  'Aruba',
  'Paris',
  'Bora Bora',
  'Barcelona',
  'Rio de Janeiro',
  'Marrakesh',
  'New York City',
];

/* Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false. */

/*The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.*/
function contains(city, destinations) {
  return destinations.some((element) => element === city);
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
console.log(contains('Porto', destinations)); // false

//for() loop
function contains2(city, destinations) {
  for (let i = 0; i < destinations.length; i += 1) {
    if (destinations[i] === city) {
      return true;
    }
  }
  return false;
}

console.log(contains2('Barcelona', destinations)); // true
console.log(contains2('Nashville', destinations)); // false
console.log(contains2('Porto', destinations)); // false

/**LS
function contains(element, list) {
  return list.indexOf(element) >= 0;
}

Our first solution iterates over all elements in the input array. As soon as an element equals the input string, it returns true. If we have iterated over all elements without returning true, it means that there is no element that equals the input string and we return false.

Our second solution leverages the built-in method Array.prototype.indexOf(), which returns the index of an element in the array, and returns -1 if the element is not in the array.
 */
function contains3(element, list) {
  return list.indexOf(element) >= 0;
}

console.log(contains3('Barcelona', destinations)); // true
console.log(contains3('Nashville', destinations)); // false
console.log(contains3('Porto', destinations)); // false

/**LS
 * Further Exploration
Under the hood, indexOf is conceptually similar to our first solution. In particular it also uses strict equality === to compare the input element to all elements in the array.

A consequence of using strict equality is that both solutions work only for primitive types like strings. For objects, the equality check would test whether the input object and the elements in the list are the same object in terms of reference, which might not be the case. For example: 
 * 
*/
let lists = [[1, 2], [3], [4, 5, 6]];

contains([3], lists); // false

// There is, in fact, no straightforward built-in way to test the value equality of two arbitrary objects in JavaScript. But there are libraries that provide this functionality, for example Lodash's isEqual method. Don't worry about this yet, though.
