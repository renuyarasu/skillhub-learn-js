// Skillhub - ES6-ES2015
console.clear();
// ES6-ES2015
/* let & const / Arrow functions / Classes / for...of / Default parameters / Rest parameters / Spread parameters / Destructuring */

// Default parameters
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

function user(name, age = 20) {
    console.log(name + ' ' + age);
}

user('VedaGna') //VedaGna 20