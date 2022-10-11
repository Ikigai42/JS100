// Write a while loop that logs all odd natural numbers between 1 and 40.
let num = 1;

while (num <= 40) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num += 1;
}

/**LS
 * let num = 1;

while (num < 40) {
  console.log(num);
  num += 2;
}

The trick in our solution code is that we know that each second number is odd, so if we start at 1, we can simply increment the number by 2 on each iterating, effectively looping only over the odd numbers.

Discussion
You might have come up with code like the following:

let num = 1;

while (num < 40) {
  console.log(num);
  num += 2;
}

It loops over all numbers from 1 to 40 and uses an if statement to determine whether or not num should be logged. In order to check whether num is even, we would use the condition num % 2 === 0, which checks whether num is divisible by 2 without remainder. In order to determine whether a number is odd, we simply negate it.
 */
