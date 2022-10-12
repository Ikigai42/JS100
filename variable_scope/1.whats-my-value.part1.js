/* What will the following code log to the console and why? Don't run it until you have tried to answer. */

console.log(greeting); // passes the greeting variable to console.log()function before it's initialized. Var only hoists the variable DECLARATION prior to initialization so the current value here is 'undefined'

var greeting = 'Hello world!'; // declares the variable greeting & initializes it the the string value "Hello World!"

// Logs:
// undefined

/**LS
 * All variables in JavaScript declared with var are hoisted, meaning they are virtually moved to the beginning of the scope. This means that our code snippet above behaves like the following one:

var greeting;

console.log(greeting);

greeting = 'Hello world!'

When a var variable is declared but not assigned a value, like on line 13, it is initialized to the value undefined. For that reason, the code logs undefined to the console.
 */
