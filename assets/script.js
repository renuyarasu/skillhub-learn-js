// Skillhub - ES8-ES2017
console.clear();

/* 
padStart()
padEnd()
Object.entries()
Object.values()
Sync/Wait
*/

// Object.values()
// The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)


let person = {
    name: 'VedaGna',
    age: 5,
    gender: 'Male'
}
let result = Object.values(person);
console.log(result); // [ 'VedaGna', 5, 'Male' ]