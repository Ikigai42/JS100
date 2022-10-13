//Write a function that returns the first element of an input array. For example:

function get1stElement(arr) {
  if (arr) return arr[0];

  return false;
}

//Test cases
get1stElement(['Earth', 'Moon', 'Mars']); // 'Earth'
get1stElement([]); // undefined
get1stElement(); // false
//Logging output
console.log(get1stElement(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(get1stElement([])); // undefined
console.log(get1stElement()); // false

/**LS

function first(array) {
  return array[0];
}

 * With this implementation, first returns undefined if the input array is empty. It is the same behavior you get for trying to access an index that is outside the bounds of the array.

Discussion
The first element of an array is at index position 0, and we access it using bracket notation.
 */
