// Skillhub - ES6-ES2015
console.clear();
// ES6-ES2015
/* let & const / Arrow functions / Classes / for...of / Default parameters / Rest parameters / Spread parameters / Destructuring */

// Spread parameters
// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

let x = [1, 2, 3, 4, 5];
let y = [6, 7, 8, 9, 10];
let z = [...x, ...y];
for (let a of z) {
    console.log(a);
}
/* 1
2
3
4
5
6
7
8
9
10 */