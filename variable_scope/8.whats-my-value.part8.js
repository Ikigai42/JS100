// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 1; // declare variable a with a let statement & initiazlize it to the value 1

function myFunction(a) {
  //function declaration myFunction(a) with one paramenter a
  console.log(a); //pass in an argument a to the console.log() function
}

let b = 2; // declare variable b with a let statement and initialize it to the value 2

myFunction(b); //Invoke myFunction(b) passing in the current value of the variable b

// logs 2;

/**LS
 * Discussion
This is another example of variable shadowing: The parameter a of myFunction shadows the variable a declared on line 1. The a we reference within the function body, on line 4, therefore refers to whatever argument is passed to the function, in our case the value of b, which is then logged.
 */
