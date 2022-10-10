// How many arguments does the Array.prototype.join() method expect?

someArray.join(separator);
//Array.prototype.join() expects at one optional argument, a SEPERATOR value that is used when concatenated the values of an Array or Array-like object.

//What happens if you call it with less or more arguments?

//If you call the join() method with no arguments a comma is used as a default to join the elements of the array into a string value

//If you call the join() method with extra arguments it ignores them.

/**LS
 * The array method join() concatenates all elements of an array into a string. It expects a single, optional argument: a string that will be used as separator. If the argument is omitted, the separator defaults to ','. Any excess arguments passed to the method upon invocation are ignored.
 */

let array = ['Bob', 'Kevin', 'Stuart'];

// separator argument omitted
array.join(); // 'Bob,Kevin,Stuart'

// single separator argument
array.join(', '); // 'Bob, Kevin, Stuart'

// excess argument passed in
array.join(' and ', 'also'); // 'Bob and Kevin and Stuart'

/*MDN
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/

join();
join(separator);
