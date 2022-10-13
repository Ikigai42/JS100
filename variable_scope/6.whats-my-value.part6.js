// What will the following code log to the console and why? Don't run it until you have tried to answer.

let a = 5; //declares and initializes the variable a to the number value 5
let b = false; //declares and initializes the variable b to the boolean value false

if (a > 4) {
  //if statment's conditional evaluates to true
  let b = true; //New declaration and initializan on different b variable to boolean value true inside the body of the if statement, inner scope;
}

console.log(b); // logs the current value the b variable points to in the outer scope => the boolean value false

/**LS
 * Discussion
The situation is similar to that of the previous exercise: The variable b declared on line 2 and the variable b declared on line 5 in the body of the if statement have the same name, but they are two different variables. Important to note is that the b that we reference on line 8 refers to the variable declared on line 2. This is because the scope of b declared on line 5 is the body of the if statement, and it is not accessible in any outer scope.
 */
