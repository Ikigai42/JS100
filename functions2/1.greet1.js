/**How can we alter the function definition of greet so that the parameter greeting is assigned a default value of 'Hello' when no argument is passed to the function invocation? */

//Initialize the parameter to the default value
function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet(); // logs: undefined, world!
// should log: Hello, world!

/**LS
 * Discussion
Default parameters are a great way to assign a default value to a parameter. This default value is used in case the parameter is undefined, which is the case if greet is called without an argument.
 */

greet(undefined);
// should log: Hello, world!
