// Determine the output that the following code will log to the console.

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree; //No output since there isn't a variable identifier with that name. The function invocation requires parentheses ().

multiplesOfThree();
// logs => '3 / 1 = 3'
// '6 / 2 = 3'
// ...
// '30 / 10 = 3'

/**LS
 * Discussion
To invoke the function, we should append parentheses to the function name on line 10, like so:
 */
