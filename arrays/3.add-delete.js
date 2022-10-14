// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
console.log(energy);

energy.shift(); // Remove 'fossil' from the array
energy.push('geothermal'); // add 'geothermal' to the end of the array.

console.log(energy);

// Creates a copy of the array from index 1 until end of the array and reassigns new array to energy
energy = energy.slice(1); // Remove 'fossil' from the array

// Indicates the index to remove 1 value from array destructively in-place
energy.splice(0, 1); // Remove 'fossil' from the array

/**LS
Discussion
The easiest way to append an element to an array is using the Array.prototype.push() method. This adds the element to the end of the list. If you wanted to add it to the beginning of the list, you could use the Array.prototype.unshift() method.

We also want to remove 'fossil', the first element in the array. There are several ways to do this:

energy.shift() does exactly that: it removes the first element from the array. Note that it changes the original array.

energy.slice(1) returns a new array containing all elements of energy from index 1 to the end. Since it does not change the original array, our solution re-assigns energy to the new array returned by slice.

energy.splice(0, 1) removes 1 element from energy, starting at index 0. This method probably takes a while to wrap one's head around, but it is one we could use also for removing any other element of an array, not just the first one.
 */
