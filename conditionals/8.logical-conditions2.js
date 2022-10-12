// Predict the output of the following code:

if (true && false) {
  // The logical and && operator evaluates to true if both operands are truthy and false if either operand is false
  console.log('Yes!');
} else {
  console.log('No...'); // always logs 'No...'
}

/**LS
 * Discussion
The condition provided to our if statement uses the logical and operator &&. Therefore the condition will return a truthy value only if both of its operands are truthy. Since false is not truthy, neither will be our condition.
 */
