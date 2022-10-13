/** 
Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
 */

function capWord(str) {
  //split into an array of strings
  let strArr = str.split(' ');
  let capArr = [];

  for (let i = 0; i < strArr.length; i += 1) {
    //get the value at current index's first letter and capitalize it
    let capLetter = strArr[i][0].toUpperCase();
    //make a copy of the remaining letters
    let remainingLetters = strArr[i].slice(1, strArr[i].length);
    //Concatenate the capital letter with remaining letters and push string value into an array
    capArr.push(capLetter + remainingLetters);
  }
  //Return the string value separating strings by a " " space character
  return capArr.join(' ');
}

console.log(capWord('launch school tech & talk')); //=> Launch School Tech & Talk

/**LS
let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' '); // 'Launch School Tech & Talk'

*Discussion
In our solution, we capitalize one word after the other. We use string.split(' ') to split the input string into words, then iterate over these words, collecting their capitalized version in the array capitalizedWords, and finally join the capitalized words into the final string.

Capitalization of a word can be achieved by taking the first character (word[0]), transform it to upper case, and then concatenate it with the rest of the word (word.slice(1)). If we come across a word that is only one character long, word.slice(1) is the empty string. This is case for &. Note that '&'.toUpperCase() returns '&' (as would '&'.toLowerCase()), because '&' does not distinguish upper and lower case.
 */
