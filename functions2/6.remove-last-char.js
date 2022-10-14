// Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

function removeLastChar(string) {
  //Create a copy of the input string argument removing the last character
  return string.slice(0, string.length - 1);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

console.log(removeLastChar('ciao!'));
console.log(removeLastChar('hello'));
