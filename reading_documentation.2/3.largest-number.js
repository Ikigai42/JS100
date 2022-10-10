//Using the documentation, determine how we can find the largest numeric value that can be represented in JavaScript. Write a line of code that returns this value.

Number.MAX_VALUE; //maximum numeric value representable in JS

console.log(Number.MAX_VALUE);
// 1.7976931348623157e+308

BigInt.MAX_VALUE;

console.log(BigInt(Number.MAX_SAFE_INTEGER));
// 9007199254740991n

console.log(BigInt(Number.MAX_VALUE));
/*
1797693134862315708145274237317043567980705675258449965989174768031
572607800285387605895586327668781715404589535143824642343213268894641
827684675467035375169860499105765512820762454900903893289440758685084
551339423045832369032229481658085593321233482747978262041447231687381
77180919299881250404026184124858368n
😂🤯*/

/**LS
 * Discussion
MAX_VALUE is a property of Number. Any value larger than MAX_VALUE should be processed as Infinity.

The value 1.79...e+308 uses exponential notation and can be read as 1.79... * 10^308 (1.79... times 10 to the power of 308), which is short-hand for a really large number.

In ES6, another value was introduced: MAX_SAFE_INTEGER. It has a value of 9007199254740991 and is the largest number that can be processed and compared with precision.

However, it is unlikely you will need those values soon.
 */
