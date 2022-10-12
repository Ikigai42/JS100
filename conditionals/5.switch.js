/**
Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.
 */

let animal = 'horse';

switch (animal) {
  case 'duck':
    return console.log('quack');
  case 'squirrel':
    return console.log('nook nook');
  case 'horse': //matches input argument executes code below
    return console.log('neigh'); //logs the string 'neigh' // no stopping statement (break/return so continutes to fall-through & log code below until the end of the lexical block of code)
  case 'bird':
    return console.log('tweet tweet'); // logs 'tweet tweet'
  default:
    console.log('*cricket*'); // logs '*cricket*'
}

/**LS
 * Discussion
The switch statement evaluates the provided expression (animal in our case) and will execute the statement associated with the case that matches, as well as the statements in all cases following the matching case until reaching either the end of the switch statement or a break.

In the provided code, this means that after finding a matching case ('horse'), JavaScript will execute console.log('neigh') as well as the console.log invocations in all following clauses.

In order to avoid this "fall through" behavior, we can place a break statement in each clause of our switch statement, as seen below:

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
    break;
  case 'horse':
    console.log('neigh');
    break;
  case 'bird':
    console.log('tweet tweet');
    break;
  default:
    console.log('*crickets*');
}
 */
