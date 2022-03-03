// Skillhub - ES11-ES2020
console.clear();
/* 
• BigInt (Number.MAX_SAFE_INTEGER)
  2**53-1=9007199254740991
• Dynamic Impact
• Nullish operator
• Optional chaining 
*/

// Optional chaining 
// Optional chaining is a safe way to access nested object properties, even if the property doesn't exist.

let pet = {
  cat: {
    name: 'Meow'
  }
};
let results = pet.dog?.name
console.log(results); // undefined