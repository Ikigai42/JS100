/** Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a
 * character set, e.g en_US.UTF-8. */

let code = 'en_US.UTF-8';

function extractLangCode(code) {
  //separate into an array of strings at _ returns => ['en', 'US.UTF-8']
  let langCodeArr = code.split('_');
  //return first element of array
  return langCodeArr[0];
}
console.log(extractLangCode(code)); // 'en'
console.log(code); // 'en_US.UTF-8'

console.log(extractLangCode('en_US.UTF-8')); // 'en'
console.log(extractLangCode('en_GB.UTF-8')); // 'en'
console.log(extractLangCode('ko_KR.UTF-16')); // 'ko'

/**LS
 * Discussion
There are different ways to solve this. Our solution splits the input string at the '_' character, resulting in an array like ['en', 'US.UTF-8'], and then returns the first element of that array.
 */
