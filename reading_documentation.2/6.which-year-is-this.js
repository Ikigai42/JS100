//The MDN page for Date lists two methods to get the year of a date.

let today = new Date();

today.getYear();
today.getFullYear();

//What is the difference between the two methods and which one should you use?

.getYear() // Lists the last two digits of a year i.e., 1992 => 92
.getFullYear() // Lists all four digits of a year i.e., 1992 => 1992

//MDN reccomends to use the getFullYear() method

/**LS
 * Date.prototype.getYear() returns a number representing the year of the date on which it is invoked, minus 1900. For example, if the date is sometime in 2019, getYear() will return 119.

Date.prototype.getFullYear() returns a number representing the year of the date on which it is invoked. For example, if the date is sometime in 2019, getFullYear() will return 2019.

As the documentation notes, getYear() is deprecated and you should avoid using it. It is being replaced with getFullYear(), which returns a four-digit number representing the year, as expected.
 */