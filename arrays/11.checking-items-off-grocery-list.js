/**We have made a grocery list, and as we check off items on that list, we would like to remove them.

Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows. */

let groceryList = [
  'paprika',
  'tofu',
  'garlic',
  'quinoa',
  'carrots',
  'broccoli',
  'hummus',
];

let listCopy = groceryList.slice(0);

console.log('\nLogs items from bottom of list up');
//Logs items from bottom of list up
while (groceryList.length > 0) {
  let item = groceryList.pop(); //Destructively mutates array in-place
  console.log(item);
}

console.log('\nLogs items from top of list down');
//Logs items from top of list down
while (listCopy.length > 0) {
  let item = listCopy.shift(); //Destructively mutates array in-place
  console.log(item);
}
// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []

/**LS
while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
} 

Discussion
The Array.prototype.shift() method removes and returns the first element of the calling array. This method permanently modifies the array, which can be seen by logging groceryList to the console after removing elements.
*/
