// Skillhub - ES8-ES2017
console.clear();

/* 
padStart()
padEnd()
Object.entries()
Object.values()
Sync/Wait
*/

// String.prototype.padStart()
// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

const myString = 'VedaGna';
const result = myString.padStart(100, '*') + myString.padEnd(10, '*');
console.log(result);


