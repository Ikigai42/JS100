/** What is the difference between the following two code snippets? Check the MDN documentation on while and do...while */

let counter = 0;

//Never enters the body of the while loop
while (counter > 0) {
  //While loop runs only if the test condition is true
  console.log('Woooot!');
  counter -= 1;
}

let counter2 = 0;

//Runs the code inside the do/while loop once then checks the condition
do {
  //Do/while loops run the code once befor checking the test condition
  console.log('Woooot Woot!');
  counter2 -= 1;
} while (counter2 > 0);

/**LS
 * Both statements execute the given block as long as the condition evaluates to true. The difference is that the condition in a while statement is checked before executing the block, while the condition in a do...while statement is checked after the block has been executed. So the block in a do...while statement will always be executed at least once, even if the condition is not satisfied.

Therefore the second code snippet logs 'Woooot!' once, while the first code snippet does not log anything.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
 */
