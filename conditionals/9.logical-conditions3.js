//Without running the below code, determine what will be logged to the console.

// declares the variable sale and initializes it to the boolean value true
let sale = true;

// declares the variable admissionPrice and initializes it to the value returned by a ternary statement
let admissionPrice = !sale ? 5.25 : 3.99; //Ternary translated: If no sale is true (sale is falsy) return the number value 5.25 otherwise there is a sale (sale is truthy) and retuns the number value 3.99 assigning it to the admissionPrice variable

console.log('$' + admissionPrice); //logs current value of admissionPrice concatenated to the string '$' loging the string value => '$3.99'

/**LS
 * Discussion
On line 2 of our code, admissionPrice is assigned to the value of the ternary if-then-else statement. Note that sale was assigned to true on line 1, and the condition in the ternary statement prepends this with the logical not operator !. The logical not operator returns false when its operand (in our case sale) is truthy. The condition that is checked is therefore false, and thus admissionPrice is assigned to the value of the second operand (3.99) of our ternary statement.
 */
