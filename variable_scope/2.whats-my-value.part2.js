/**What will the following code log to the console and why? Don't run it until you have tried to answer. */

console.log(greeting); // the greeting variable is passed to the console.log() function prior to it being accessible in the lexical scope so it raises a Reference Error

let greeting = 'Hello world!'; //Let declaration of greeting variable that is initialized to the strig "Hello World"

//ReferenceError: Cannot access 'greeting' before initialization

/**LS
 * Discussion
In contrast to var variables, let variables are not accessible before they are declared. For that reason the above code raises an error.
 */
