// Find out whether JavaScript has a method to lowercase a string, for example converting 'Aloha, World!' into 'aloha, world!'.

String.prototype.toLowerCase('Aloha, World!'); //converts all the alphabetic characters in a string to lowercase

console.log('Aloha, World!'.toLowerCase()); // => 'aloha, world!'

String.prototype.toLocaleLowerCase(); //takes into account the host's current locale
