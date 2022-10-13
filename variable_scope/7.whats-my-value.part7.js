// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1; // declaring the variable a and initializing it to the value 1

function myFunction() {
  console.log(a); //passing in the value of a from the outer scope to the body of the myFunction() as an argument to console.log()
}

myFunction(); // Invoking the myfunction() function

// logs => 1;

/**LS
 * Discussion
The variable a declared in the let statement on line 1 is declared at the very top level of our code, so it is accessible from everywhere in the code, including from within the body of myFunction.
 */
