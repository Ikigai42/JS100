// Without looking at your notes or MDN, try to recall all values that count as falsy in JavaScript.

//falsy
console.log(`8 falsy JS values:`);
false;
console.log(`1. false: ${!!false}`);
0;
console.log(`2. 0: ${!!0}`);
(' ');
console.log(`3. '' or "": ${!!''}`);
undefined;
console.log(`4. undefined: ${!!undefined}`);
null;
console.log(`5. null: ${!!null}`);
-0;
console.log(`6. -0: ${!!-0}`);
0n; // (BigInt zero)
console.log(`7. 0n: ${!!0n}`);
NaN;
console.log(`8. NaN: ${!!NaN}`);
