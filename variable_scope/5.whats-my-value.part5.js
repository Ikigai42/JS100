// What will the following code log to the console and why? Don't run it until you have tried to answer.

function myFunction() {
  let a = 1; //declare and initialize the variable a to the value 1

  if (true) {
    //condition passed to if statement truthy
    console.log(a); //Attempts to access new a variable in TEMPORAL DEAD ZONE☠️
    let a = 2; //declare a new variable a inside the body of the if statement & initialize it to the value 2
    console.log(a); //log the value that was declared inside the body of the if statement
    //logs the value => 2
  }
}

myFunction(); //Invokes myFunction()

//Raises:
//ReferenceError: Cannot access 'a' before initialization

/**LS
 * Discussion
Your initial hunch might have been that this code should output the numbers 1 (on line 8) and 2 (on line 10). The reason that doesn't happen is that variables declared by let aren't available until the code runs. Therefore, the let statement on line 9 creates a new variable 'a' that isn't available on line 8. Since we try to log 'a' before assigning it a value, a ReferenceError is raised.

Technically, the scope of 'a' is the entire block. JavaScript does hoist the variables defined by let, but, when it does, it creates a "temporal dead zone" in which the variable exists but doesn't have a value -- not even a value of undefined. We talk more about the temporal dead zone in a later course.

Note that the variable 'a' defined on line 8 shadows the variable 'a' defined on line 4.
 */
