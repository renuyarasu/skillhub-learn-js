// Skillhub - ES6-ES2015
console.clear();
// ES6-ES2015
/* let & const / Arrow functions / Classes / for...of / Default parameters / Rest parameters / Spread parameters / Destructuring */

// Destructuring assignment
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const user = {
    name: 'VedaGna',
    age: 5,
    gender: 'Male'
};
const { name, age, gender } = user;
console.log(age);