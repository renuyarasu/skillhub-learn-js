// Skillhub - ES10-ES2020
console.clear();
/* 
• Flat
• Function.prototype.toString() 
• String.prototype.trimStart() 
• String.prototype.trimEnd() 
• Object.fromEntries()

*/

// Flat

let numbers = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
let results = numbers.flat(2);
console.log(results); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9]