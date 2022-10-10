// Write a loop that logs greeting three times.

let greeting = 'Aloha!';

for (let i = 1; i <= 3; i += 1) {
  console.log(greeting);
}

/**LS
 * let greeting = 'Aloha!';

for (let count = 1; count <= 3; count += 1) {
  console.log(greeting);
}

let greeting = 'Aloha!';
let count = 1;

while (count <= 3) {
  console.log(greeting);
  count += 1;
}

Discussion
For both kinds of loops, we declare a counter variable count to keep track of how many iterations we've been through. We start by assigning it to 1, and then increment it on each iteration of the loop. As soon as it is greater than 3, the condition provided to the loop returns false and the loop is terminated.
 */
