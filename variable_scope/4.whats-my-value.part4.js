// What will the following code log to the console and why? Don't run it until you have tried to answer.

//function declaration myFunction()
function myFunction() {
  let a = 1; //Declare and initialize the variable a to the number 1

  if (true) {
    //condition is truthy > enter scope of if statement
    console.log(a); //log the current value of the a variable => 1
  }
}

myFunction(); //Function invocation call to myFunction()

//Logs:
// 1

/**LS
 * The code logs 1.
 * Discussion
Variables declared in an outer scope can be accessed in any inner scope. In our case, the variable a is declared in the function definition and then accessed in the body of the if statement. For that reason, line 4 logs the value 1 when myFunction is invoked.
 */
