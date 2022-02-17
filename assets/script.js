// Skillhub - ES6-ES2015
console.clear();
// ES6-ES2015
/* let & const / Arrow functions / Classes / for...of / Default parameters / Rest parameters / Spread parameters / Destructuring */

// for...of
// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

let myArray = [1, 2, 3, 4, 5];

for (let x of myArray) {
    console.log(x);
}
/* 
1
2
3
4
5 */
