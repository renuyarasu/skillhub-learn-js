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

/*  Abstraction
    Abstraction in computer programming is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler APIs.
 */
// Creating Abstract Class
class Mobile {
    constructor(name, color, initialChargeing) {
        this.name = name;
        this.color = color;
        this.initialChargeing = initialChargeing;
        this.currentChargeing = 0;
        this.plugInCharge = (charge) => {
            this.currentChargeing = this.initialChargeing + charge;
        }
    }
}

// Creating/Installing objects by using class
let redmi = new Mobile('Redmi Note 7', 'Black', 20);
let apple = new Mobile('Apple', 'Black', 20);

// Getting/Setting the properties and actions with created object.
redmi.plugInCharge(30);
console.log(redmi.currentChargeing);


