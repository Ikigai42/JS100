/* Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result. */

let speed = 0; //declareds & initializes the speed variable to the number value 0
let acceleration = 24; //declareds & initializes the acceleration variable to the number value 24
let brakingForce = 19; //declareds & initializes the brakingForce variable to the number value 19

//declareds & initializes the isMoving variable to the return value from the comparisson expressions
let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
//                  19           24       and  (false    or         true     )
//                        true            and            true
console.log(isMoving); // logs true & returns undefined

//Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following? Yes

let isAlsoMoving =
  (brakingForce < acceleration && speed > 0) || acceleration > 0;

console.log(isAlsoMoving);

/**LS
 * Bonus question: Yes, we do need the parentheses, because && has a higher operator precedence than ||, so:

brakingForce < acceleration && speed > 0 || acceleration > 0

is equivalent to:

(brakingForce < acceleration && speed > 0) || acceleration > 0


Discussion
The provided code uses the logical or operator ||, which checks whether at least one of its operands is truthy, and the logical and operator &&, which checks whether both its operands are truthy.

In the above code, the operands are comparisons with the following values:
brakingForce < acceleration // true
speed > 0                   // false
acceleration > 0            // true

Therefore, our logical expression breaks down to true && (false || true). Since false || true evaluates as true and true && true evaluates as true as well, the value of isMoving is true.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */
