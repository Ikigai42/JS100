/**What will the following code log to the console and why? Don't run it until you have tried to answer. */

// if statement
if (true) {
  //condition is truthy enters into lexical block scope of if statement
  let myValue = 20; // declare and initialize myValue variable inside the if statement
}

// ReferenceError: myValue is not defined
console.log(myValue);
/*passes myValue value from outer scope to console.log() function. There is no myValue variable in this outer lexical scope so a ReferenceError is raised */

/**LS
* Discussion
Variables declared with let are block scoped. This means that when we declare the variable myValue within a block on line 2, that variable is not accessible outside of the block on line 5, and a ReferenceError is raised.
 */
