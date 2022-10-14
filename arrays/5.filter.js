// Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let highScores = scores.filter((value) => value >= 100);

let highScoresCount = highScores.length;

console.log(highScores);
console.log(highScoresCount);

/**LS
let count = 0;

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

console.log(count); // 3
 */
