/**Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:
 * The first human year corresponds to 15 cat years.
 * The second human year corresponds to 9 cat years.
 * Every subsequent human year corresponds to 4 cat years.
 */

function catAge(humanYears) {
  let catYears = 0;

  if (humanYears > 2) {
    catYears = 15 + 9 + (humanYears - 2) * 4;
  } else if (humanYears === 2) {
    catYears = 15 + 9;
  } else if (humanYears === 1) {
    catYears = 15;
  }

  return catYears;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

/**LS
function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

Discussion
One way to approach the calculation is by using a switch statement, as in our solution above. In case of 1 human year, we return the corresponding 15 cat years. In case of 2 human years, we return 24 cat years (15 for the first human year plus 9 for the second human year). In each other case, handled by the default statement, we start from 24 cat years for the first two human years and add 4 cat years per remaining human year.

Note that since we are explicitly returning from each case statement, it is not necessary to use break statements.
 */
