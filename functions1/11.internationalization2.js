/**Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example: */

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

/**Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, and feel free to fall back on the language-specific greetings in all other cases, for example: */

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

/* When implementing localGreet, make sure to re-use your extractLanguage, extractRegion and greet functions from the previous exercises. */
function localGreet(code) {
  const language = extractLangCode(code); // 'en'
  const region = extractRegion(code); // 'US'

  switch (region) {
    case 'US':
      return 'Hey!';
    case 'GB':
      return 'Hello!';
    case 'AU':
      return 'How you going?!';
    default:
      return greet(language);
  }
}

/**LS
 * Discussion
Our solution checks the extracted region code and returns a region-specific greeting in case it is 'US', 'GB', or 'AU'. In all other cases, it uses the greet function with the extracted language code as argument.
 */

function extractLangCode(code) {
  //separate into an array of strings at _ returns => ['en', 'US.UTF-8']
  let langCodeArr = code.split('_');
  //return first element of array
  return langCodeArr[0];
}

function extractRegion(locale) {
  //split the string at '.' into an array of strings // ['en_US', 'UTF-8']
  //return the element (string value) at index 0 // 'en_US'
  //split the string 'xx_XX' at '_' //  ['en', 'US']
  //return the element (string value) at index 1
  return locale.split('.')[0].split('_')[1];
}

function greet(langCode) {
  switch (langCode) {
    case 'en':
      return 'Hi!';
    case 'fr':
      return 'Salut!';
    case 'pt':
      return 'Olá!';
    case 'de':
      return 'Hallo!';
    case 'sv':
      return 'Hej!';
    case 'af':
      return 'Haai!';
    default:
      return '🖖';
  }
}
