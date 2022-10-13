// Write code that checks whether the string byteSequence contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

let targetChar = /x/;

byteSequence.match(targetChar);

console.log(!!byteSequence.match(targetChar));
console.log(byteSequence.match(targetChar));

function includesChar(str, target) {
  return !!str.match(target);
}

console.log(includesChar(byteSequence, targetChar));
console.log(includesForLoop(byteSequence, 'targetChar'));
console.log(includesForLoop(byteSequence, 'X'));
console.log(includesWhileLoop(byteSequence, 'targetChar'));
console.log(includesWhileLoop(byteSequence, 'X'));

function includesForLoop(str, target) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === target) {
      return true;
    }
  }

  return false;
}

function includesWhileLoop(str, target) {
  let count = 0;

  while (count <= str.length) {
    if (str[count] === target) {
      return true;
    }
    count += 1;
  }

  return false;
}
