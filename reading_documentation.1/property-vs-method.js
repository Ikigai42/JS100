let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1]; // doesn't mutate array returns the last element of the Array => 'palm tree'
trees.pop(); // destructively mutates the array returning last element => 'palm tree'
trees[trees.length - 1]; //returns current last element of array => 'sequoia'

//What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.

/**LS
 * Discussion
Note that we use trees.length (without parentheses) and trees.pop() (with parentheses). If you try using trees.length() and trees.pop, you will notice that this does not work. For now, simply remember that length is an array property and is called without parentheses; pop is an array method that must be invoked with parentheses (because it is a function). You will learn more about this later.

Also notice that the index of the last element in an array will always be the length of that array minus 1. For example, the last index in a four-element array is 3. This is due to arrays having a zero-based index.
 */
