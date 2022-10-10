// Run the following code.

let tweet = 'Woohoo! :-)';

/* 
if (tweet.length() > 140) { 
  console.log('Tweet is too long!');
}
*/
if (tweet.length > 140) {
  console.log('Tweet is too long!');
}

// You'll see that it raises an error:
// TypeError: tweet.length is not a function

// Check the documentation of both TypeError and length, in order to find out what causes the error.

/**MDN
 * The JavaScript exception "is not a function" occurs when there was an attempt to call a value from a function, but the value is not actually a function.
 */

// .length is a property of the String prototype not a method so no parenthesis should be there.

/**LS
 * Solution
The syntax section of the MDN page on length demonstrates that length is called without parentheses. This is because it is a string property, not a string method.

Why does our code raise a TypeError? According to the documentation of length, it returns a number. So tweet.length is expected to be a number. Instead, we try to invoke it as a function when we write tweet.length(). So when the JavaScript engine encounters tweet.length(), there is a type mismatch: tweet.length is expected to be a number, but we use it as a function.

Discussion
You might also recall length from the Property vs Method exercise. We will talk about properties and methods in more detail in a later course.
 */
