/*1. In the following code snippet, find all violations of the style guide. Rewrite it so that it conforms with the guide.

let ice_cream_taste = 'chocolate'
let ice_cream_density = 10

while(ice_cream_density > 0)
{
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The '+ ice_cream_taste +' ice cream melted.');

*/

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');

/**LS
 *Discussion
Here are the guidelines that were not followed in the original code snippet:

Use camelCase for variable names.
End all statements with a semicolon.
Indent lines with two spaces.
Use spaces between keywords (like while) and opening parentheses, as well as between closing parentheses and opening curly brackets.
Put the opening curly brackets of the while block on the same line as the while statement.
Put spaces before and after operators like +. 
*/
