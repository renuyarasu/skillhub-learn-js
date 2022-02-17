// Skillhub - ES6-ES2015
console.clear();
// ES6-ES2015
/* let & const / Arrow functions / Classes / For..of / Default parameters / Rest parameters / Spread parameters / Destructuring */

// Object
// The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.


const dog = {
    name: 'Rocky',
    age: 5,
    bark() { console.log('barking loudly'); } // ES6
}
dog.name = 'Jocky';// Jocky
dog['name'] = 'Jocky'; // Jocky

const result = dog.name;
console.log(result);