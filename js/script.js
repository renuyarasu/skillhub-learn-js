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

// Using Classes

class Person{
  
}
let person = new Person();
// person.username = 'VedaGna';
person['username'] = 'VedaGna';

console.log(person); //{ username: 'VedaGna' }
console.log(typeof person); // object
