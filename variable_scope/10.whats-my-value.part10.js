// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  //declaring variable a with const statement & initializing it to an object literal
  firstName: 'John',
  lastName: 'Doe',
};

function myFunction() {
  a.firstName = 'Jane'; //doesn't reassign a but destructively modifies the firstName property re-assigning it the string value 'Jane'
}

myFunction(); //Invokes the myFunction() function

console.log(a); //Logs the current value of a => the object literal { firstName: 'Jane', lastName: 'Doe',}

/**LS
 * Discussion
The fact that const variables cannot be re-assigned does not mean that the value they hold is immutable. As we see in the example above, objects that are assigned to const variables can be mutated.
 */
