// Without looking into your notes, try to remember which primitive data types are defined in JavaScript. Then find this information on MDN.

/** 7 Primitive Data Types
 String
 Number
 Boolean
 Null
 Undefined
 (newer 👇)
 BigInt
 Symbol
 *
 
 
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#data_types

Seven data types that are primitives:
- Boolean | true and false.
- null | special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
- undefined | A top-level property whose value is not defined.
- Number | An integer or floating point number. For example: 42 or 3.14159.
- BigInt | An integer with arbitrary precision. For example: 9007199254740992n.
- String | A sequence of characters that represent a text value. For example: "Howdy".
- Symbol | A data type whose instances are unique and immutable.

*/

/**LS
 * Note that Symbol was added only in ES6, and BigInt was introduced in ES9. We do not discuss either type in this course.

You may see occasional references to null being an object, even on MDN. But, even there, you will also find statements that say it is primitive type. The history and behavior of null is somewhat confusing, but, for our purposes, it is a primitive type.

Discussion
You can find this information on the JavaScript data types and data structures page.

In addition to the primitive data types, JavaScript has one non-primitive type: Object (which also comprises arrays). The main difference is that values of a primitive type are immutable. That is, there is no way to change values like 47, 'Launch School', or true, while you can change non-primitive values like arrays, e.g. by adding or removing elements.
 */
