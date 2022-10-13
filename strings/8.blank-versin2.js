/**Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example: */

function noSpaceChars(str) {
  if (str.trim().length === 0) {
    return true;
  }

  return false;
}
console.log(noSpaceChars('  ')); // true
console.log(noSpaceChars('42')); // false
console.log(noSpaceChars('helloworld')); // false
console.log(noSpaceChars('')); // true

let noSpaceCharsArrow = (str) => str.trim().length === 0;

console.log(noSpaceCharsArrow('  ')); // true
console.log(noSpaceCharsArrow('42')); // false
console.log(noSpaceCharsArrow('helloworld')); // false
console.log(noSpaceCharsArrow('')); // true

/**LS
 * Discussion
The String.prototype.trim() method removes whitespaces from both ends of a string. Once we removed those whitespaces, we can use the same strategy as in the previous exercise.
 */
