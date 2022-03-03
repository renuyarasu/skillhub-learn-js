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

// Classes

class Mobile {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  calling() {
    console.log('Calling to Chinnu!');
  }
  play() {
    console.log('Playing video games in mobile!');
  }
  setName(newName) {
    this.name = newName;
  }
}

// #Creating/Instantiating objects by using class

let redme = new Mobile('Redmi Note 7', 'Silver');
let apple = new Mobile('Apple S 7', 'Black')


