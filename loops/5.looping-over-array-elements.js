/* 
Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.
*/

let array = [1, 2, 3, 4];
let index = 0;

//After each iteration of the loop the while condition is evaluated.
while (index < array.length) {
  console.log(array[index]); // Access the array element at the current index, and log the returned element with console.log.
  index += 1; // increment index by 1.
}

/**LS
 * Since JavaScript arrays have a zero-based index, we want to terminate the loop when index is equal to array.length, because the last index of an array is always one less than the array's length.
 * 
 * Further Exploration
What would the code output if array was empty? Why is that?
 */

//There wouldn't be any output since the while condition would be falsy
