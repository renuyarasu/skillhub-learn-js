// Skillhub - OOPs
console.clear();
/*
• OOPs Intro
• Objects
• Classes
• Encapsulation
• Abstraction
• Reusability/inheritance
• Polymorphism
• Association
• Aggregation
• Composition
*/

// OOP = OOP (Object-Oriented Programming) is an approach in programming in which data is encapsulated within objects and the object itself is operated on, rather than its component parts.
// JavaScript is heavily object-oriented. It follows a prototype-based model (as opposed to class-based).

// Objects - Object, property, and method
/* 
    01. Object Literal
    02. Object.create()
    03. Functions are Objects in JavaScript 
    04. Using Classes
*/

// inheritance
// Inheritance is a mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods.

// Creating Parent Class
class Person {
    constructor(name, designation) {
        this.name = name;
        this.designation = designation;
    }
    learn() {
        console.log('Learning!');
    }
    eat() {
        console.log('Eating!');
    }
    sleep() {
        console.log('Sleeping!');
    }
}

// Extending Parent Class to Child Class


// Extending Parent Class to one more Child Class


// Creating/Installing objects by using class



// Getting/Setting the properties and actions with created object.
let person = new Person('Human', 'Nothing');
console.log(person);



