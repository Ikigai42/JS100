let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool"; // assigns string value to the variable tweet

let words = tweet.split(' '); // assigns the result of the method call .split() returning an array of strings
let isValid = tweet.length < 140; // assigns the booleans value from the result of the comparison < operator

typeof tweet; // returns => string
typeof words; // returns array object => object
typeof isValid; // returns boolean value => boolean

console.log(typeof tweet); // logs string
console.log(typeof words); // logs object
console.log(typeof isValid); // logs boolean

/**LS
 * Discussion
Note in particular that although words is an array, typeof words returns 'object'. This is because, in JavaScript, arrays are a kind of objects. If you need to specifically distinguish whether an object is an array, you can use the Array.isArray() method, which returns a Boolean:
 */
Array.isArray(words); // true
