// Skillhub - ES10-ES2020
console.clear();
/* 
• Flat
• Function.prototype.toString() 
• String.prototype.trimStart() 
• String.prototype.trimEnd() 
• Object.fromEntries()

*/

// Object.fromEntries()
// The Object.fromEntries() method transforms a list of key-value pairs into an object.


let person = [['name', 'VedaGna'], ['age', 5]]
let results = Object.fromEntries(person);
console.log(results); //  { name: 'VedaGna', age: 5 }