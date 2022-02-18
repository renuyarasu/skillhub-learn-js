// Skillhub - ES8-ES2017
console.clear();

/* 
padStart()
padEnd()
Object.entries()
Object.values()
Sync/Wait
*/

// Object.entries()
/* The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.

The order of the array returned by Object.entries() is the same as that provided by a for...in loop. If there is a need for different ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));. */

let person = {
    name: 'VedaGna',
    age: 5,
    gender: 'Male'
}
let result = Object.entries(person);
console.log(result); // [ [ 'name', 'VedaGna' ], [ 'age', 5 ], [ 'gender', 'Male' ] ]