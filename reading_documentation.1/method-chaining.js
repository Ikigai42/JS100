//Given the following tweet:
let tweet = 'Starting to get the hang of it... #javascript #launchschool';

//What will the following statements evaluate to?

tweet.split(' '); // returns an array with the elements from the string separated at spaces.
//=> ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launchschool']

tweet.split(' ').reverse(); // destructively reverses the elements in the array based off their index values returns array
//=> ['#launchschool', '#javascript', 'it...', 'of', 'hang', 'the', 'get', 'to', 'Starting']

tweet.split(' ').reverse().join(' '); //returns a string value with the elelments of the array joined by one space between each element.
//=> "#launchschool #javascript it... of hang the get to Starting"

/**LS
 * Discussion
In order to find the documentation for each method call, we need to know where to look. Our initial method call, split(), is invoked on the string tweet. We can find information about this method in the String documentation.

Because split() returns an array, we know that reverse() is being invoked on an array and can search the Array documentation to find information about it.

Since reverse() also returns an array (with the elements of the input array in reverse order), we can again look within the Array documentation to find information about the return value of join().
*/
