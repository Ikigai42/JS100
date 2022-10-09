// In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.

'8' == 8; // loose equality operator comparison
//With the loose equality operator, JS coreces the types to the same before comparing values
'8' === 8; //strict equality operator comparison
//Compares the type and value

console.log('8' == 8); // true
console.log('8' == 8); // false

/**LS
 * Discussion
==, also known as the standard or abstract equality operator, will attempt to coerce the operands into two values of the same kind before making a comparison. When dealing with a string and a number, == coerces the string value into a number.

===, also known as the strict equality operator, does not perform any type conversion on its operands. It will always return false if its operands are of different types. On the second line of our code example, we attempted to compare a string to a number and therefore the return value was false.

We recommend that you always use the strict equality operator (===) unless you have a specific reason not to. This will help to avoid unexpected behavior in your code. Later in the curriculum, you will learn more about JavaScript's type conversions and the rules they follow.
 */
