// Skillhub - ES6-ES2015
console.clear();
// ES6-ES2015
/* let & const / Arrow functions / Classes / For..of / Default parameters / Rest parameters / Spread parameters / Destructuring */

// Classes
// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

/* const dog1 = {
    name: 'Rocky',
    bark() { console.log('barking loudly'); }
}
const dog2 = {
    name: 'Jocky',
    bark() { console.log('barking loudly'); }
}

console.log(dog1.bark());
console.log(dog2.bark()); */

class Dog {
    constructor(name) {
        this.name = name
    }
    bark() { console.log('barking loudly'); }
}
const dog1 = new Dog('Rocky')
const dog2 = new Dog('Jocky')

dog1.bark()
dog2.bark()