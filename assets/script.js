// Skillhub - ES6-ES2015
console.clear();
// ES6-ES2015
/* let & const / Arrow functions / Classes / for...of / Default parameters / Rest parameters / Spread parameters / Destructuring */

// Rest parameters
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

function user(name, ...rest) {
    console.log(name + ' ' + rest);
}
user('VedaGna', 'Gnapika', 'Hindu', 'Renu') // VedaGna Gnapika,Hindu,Renu