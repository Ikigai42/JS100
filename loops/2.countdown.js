// The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.

//Given code
for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}

for (let i = 10; i >= 0; i -= 1) {
  console.log(i);
  if (i === 0) console.log('Launch!');
}

/**LS
 * Discussion
In our solution code, we initialize i to 10, and decrement i by 1 on each iteration, using the short-hand expression i -= 1. Once i is equal to 0, the condition provided to our for loop is false and the loop terminates. Finally, we log 'Launch!'.

There are different ways to achieve this behavior. For example, you could also use i >= 0 as condition and then check whether i reached the value of 0 inside the loop, in order to determine whether to log the number or 'Launch!'.

for (let i = 10; i >= 0; i -= 1) {
  if (i === 0) {
    console.log('Launch!');
  } else {
    console.log(i);
  }
}
 */
