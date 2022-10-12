/* Similar to the previous exercise, now write a function that extracts the region code from a locale. For example: */

function extractRegion(locale) {
  //split the string at '.' into an array of strings // ['en_US', 'UTF-8']
  //return the element (string value) at index 0 // 'en_US'
  //split the string 'xx_XX' at '_' //  ['en', 'US']
  //return the element (string value) at index 1
  return locale.split('.')[0].split('_')[1];
}

console.log(extractRegion('en_US.UTF-8')); // 'US'
console.log(extractRegion('en_GB.UTF-8')); // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'
