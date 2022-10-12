// Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:

//function that compares length of two strings
function compareByLength(string1, string2) {
  //return -1 if string 1 is shorter than string2
  if (string1.length < string2.length) {
    return -1;
  } else if (string2.length < string1.length) {
    //return 1 if string 2 is shorter
    return 1;
  } else {
    //return 0 if strings are equal length
    return 0;
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity'); //  1
compareByLength('humor', 'grace'); //  0

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace'));

/**LS
 * Our solution uses a simple if statement that compares the length of the string arguments.

The kind of comparison we implemented here is called three-way comparison and is often used in sorting algorithms to determine the order of the values that are sorted.
 */
