// Write a function that returns the last element of an input array. For example:

function lastElement(arr) {
  return arr[arr.length - 1];
}

//Test Cases
console.log(lastElement(['Earth', 'Moon', 'Mars'])); // 'Mars'
console.log(lastElement([])); // undefined

/**LS
 * As in the previous exercise, last returns undefined if the input array is empty.

* Discussion
Because arrays in JavaScript have a zero-based index, the last element of an array is at an index position one less than its length. For example, in an array with three elements, the elements are at index positions 0 (the first element), 1, and 2 (the last element).
 */
