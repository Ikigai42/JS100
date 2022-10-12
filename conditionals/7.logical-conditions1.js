// Predict the output of the following code:
if (false || true) {
  // The logical or || operator evaluates to true if at least one operand is a truthy value
  console.log('Yes!'); // always logs "Yes!"
} else {
  console.log('No...');
}

/**LS
 * The output will always be 'Yes!'.

Discussion
The condition provided to our if statement uses the logical or operator ||. Therefore the condition will evaluate to a truthy value if either one of its operands is truthy. Since true is truthy, the condition will always be truthy as well.
 */
