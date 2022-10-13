/**Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case? */

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(string1.toLowerCase() === string2.toLowerCase()); // true
console.log(string1.toLowerCase() === string3.toLowerCase()); // false
console.log(string2.toLowerCase() === string3.toLowerCase()); // false

/**LS
 * Discussion
A very simple way to check case-insensitive equality of strings is to first turn them to all lower or upper case and then compare them.
 */
