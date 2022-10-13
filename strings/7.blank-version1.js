// Write a function that checks whether a string is empty or not. For example:

function isBlankRegEx(str) {
  return !str.match(/[abc0-9 ]/);
}

console.log(isBlankRegEx('mars')); // false
console.log(isBlankRegEx('  ')); // false
console.log(isBlankRegEx('42')); // false
console.log(isBlankRegEx('')); // true

function isBlank(str) {
  if (str.length === 0) {
    return true;
  }

  return false;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  ')); // false
console.log(isBlank('42')); // false
console.log(isBlank('')); // true
