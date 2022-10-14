/** We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console. */

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated'],
];

// Expected output:
// happy
// cheerful
// merry
// etc...

console.log(`\nfor() loop outer | forEach() method inner loop`);
for (let index = 0; index < vocabulary.length; index += 1) {
  const element = vocabulary[index];

  element.forEach((nestedArrayElementValue) =>
    console.log(nestedArrayElementValue)
  );
}

console.log(`\nNested for() loops`);
for (let outerIndex = 0; outerIndex < vocabulary.length; outerIndex += 1) {
  const element = vocabulary[outerIndex];
  for (let nestedIndexJ = 0; nestedIndexJ < element.length; nestedIndexJ += 1) {
    console.log(element[nestedIndexJ]);
  }
}

console.log(
  `\nUsing only forEach() methods| vocabulary.forEach((element) => element.forEach((value) => console.log(value)));`
);
vocabulary.forEach((element) => element.forEach((value) => console.log(value)));

/**LS
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
  let synonyms = vocabulary[vocabularyIdx];

  for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
    console.log(synonyms[synonymIdx]);
  }
}
 */
