// Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

String.prototype.toUpperCase(); //Instance method for the entire string, but not for the first character only.

console.log('mountain'.toUpperCase()); // => 'MOUNTAIN'

/*LS
Solution
There is no built-in method for capitalizing a string. If we wanted to have such a method, we would have to implement it ourselves.

Discussion
Searching MDN for capitalize does not yield any string methods as results. In order to be sure that there really is no method, being called and described differently, you can check the MDN reference page for String: it lists all methods that are available for strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
